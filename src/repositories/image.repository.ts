import { db } from "../db/index.js";
import { images, users } from "../db/schema.js";
import { eq, and, sql } from "drizzle-orm";
import { redis } from "../config/redis.js";
import { refreshDiscordUrl } from "../utils/discord.util.js";

export interface IImagePayload {
    userId: string;
    link: string;
}

const REDIS_CACHE_KEY = "random_images_pool";
const CACHE_SIZE = 50;

/**
 * Gets a random image from the pool. Use Redis for performance.
 */
export const getRandomImage = async (category: string) => {
    const cacheKey = `${REDIS_CACHE_KEY}:${category}`;
    
    // Try to get from Redis first
    let imageLink = await redis.lpop(cacheKey);

    if (!imageLink) {
        // Pool is empty, refill it
        const results = await db.select()
            .from(images)
            .where(
                and(
                    eq(images.category, category),
                    eq(images.aproved, true)
                )
            )
            .orderBy(sql`RANDOM()`)
            .limit(CACHE_SIZE);

        if (results.length === 0) return null;

        // Push all but the first one to Redis (store as JSON string containing ID and original link)
        const entries = results.map(img => JSON.stringify({ id: img.id, link: img.link }));
        const firstEntry = JSON.parse(entries[0]);
        
        if (entries.length > 1) {
            await redis.rpush(cacheKey, ...entries.slice(1));
            await redis.expire(cacheKey, 3600); // 1 hour pool TTL
        }
        
        return { url: await getFreshUrl(firstEntry.link, firstEntry.id) };
    }

    const { id, link } = JSON.parse(imageLink);
    return { url: await getFreshUrl(link, id) };
};

/**
 * Gets a fresh URL for a Discord link, using Redis as a cache.
 */
async function getFreshUrl(url: string, id: number): Promise<string> {
    const cacheKey = `refreshed_url:${id}`;
    const cached = await redis.get(cacheKey);
    if (cached) return cached;

    const [refreshed] = await refreshDiscordUrl([url]);
    if (refreshed) {
        await redis.setex(cacheKey, 82800, refreshed); // 23h
        return refreshed;
    }
    return url;
}

/**
 * Gets an image by ID. Category is optional.
 */
export const getImageById = async (id: number, category?: string) => {
    const cacheKey = `image:${id}`;
    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached);

    const conditions = [eq(images.id, id), eq(images.aproved, true)];
    if (category) conditions.push(eq(images.category, category));

    const [image] = await db.select()
        .from(images)
        .where(and(...conditions))
        .limit(1);

    if (image) {
        const freshUrl = await getFreshUrl(image.link, image.id);
        const result = { ...image, url: freshUrl };
        await redis.setex(cacheKey, 3600, JSON.stringify(result));
        return result;
    }
    return null;
};

/**
 * Creates a new image (pending approval).
 */
export const createImage = async (payload: IImagePayload, nsfw: boolean, category: string) => {
    const [newImage] = await db.insert(images)
        .values({
            userId: payload.userId,
            link: payload.link,
            nsfw: nsfw,
            category: category,
            aproved: false
        })
        .returning();
    
    return newImage;
};

/**
 * Gets all images pending for approval.
 */
export const getPendingImages = async () => {
    return await db.select()
        .from(images)
        .where(eq(images.aproved, false));
};

/**
 * Approves an image and optionally sets its final link.
 */
export const approveImage = async (id: number, link?: string) => {
    await db.update(images)
        .set({ 
            aproved: true, 
            ...(link ? { link } : {}) 
        })
        .where(eq(images.id, id));
};

/**
 * Removes an image.
 */
export const removeImage = async (id: number) => {
    await db.delete(images)
        .where(eq(images.id, id));
};