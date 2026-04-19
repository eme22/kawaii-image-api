import { FastifyInstance } from "fastify";
import { z } from "zod";
import { sfwEnum, nsfwEnum } from "../../db/schema.js";
import { getRandomImage, getImageById } from "../../repositories/image.repository.js";

const CategorySchema = z.object({
    category: z.string()
});

const IdCategorySchema = z.object({
    category: z.string(),
    id: z.string().regex(/^\d+$/).transform(Number)
});

export async function imageRoutes(fastify: FastifyInstance) {
    
    // --- Meta Routes ---

    fastify.get("/endpoints/sfw", {
        schema: {
            tags: ["Meta"],
            description: "Get all SFW categories",
            response: {
                200: z.array(z.string())
            }
        }
    }, async () => {
        return sfwEnum;
    });

    fastify.get("/endpoints/nsfw", {
        schema: {
            tags: ["Meta"],
            description: "Get all NSFW categories",
            response: {
                200: z.array(z.string())
            }
        }
    }, async () => {
        return nsfwEnum;
    });

    // --- SFW Routes ---
    
    fastify.get("/sfw/:category", {
        schema: {
            tags: ["SFW"],
            params: CategorySchema,
            response: {
                200: z.object({ url: z.string() }),
                404: z.object({ error: z.string() })
            }
        }
    }, async (request, reply) => {
        const { category } = request.params as any;
        if (!sfwEnum.includes(category)) {
            return reply.status(404).send({ error: "Invalid SFW category" });
        }
        
        const result = await getRandomImage(category);
        if (!result) return reply.status(404).send({ error: "Theres no images in this endpoint" });
        return result;
    });

    fastify.get("/sfw/:category/:id", {
        schema: {
            tags: ["SFW"],
            params: IdCategorySchema,
            response: {
                200: z.object({ url: z.string() }),
                404: z.object({ error: z.string() })
            }
        }
    }, async (request, reply) => {
        const { category, id } = request.params as any;
        if (!sfwEnum.includes(category)) {
            return reply.status(404).send({ error: "Invalid SFW category" });
        }
        
        const result = await getImageById(id, category);
        if (!result) return reply.status(404).send({ error: "Image not found" });
        return result;
    });

    // --- NSFW Routes ---

    fastify.get("/nsfw/:category", {
        schema: {
            tags: ["NSFW"],
            params: CategorySchema,
            response: {
                200: z.object({ url: z.string() }),
                404: z.object({ error: z.string() })
            }
        }
    }, async (request, reply) => {
        const { category } = request.params as any;
        if (!nsfwEnum.includes(category)) {
            return reply.status(404).send({ error: "Invalid NSFW category" });
        }
        
        const result = await getRandomImage(category);
        if (!result) return reply.status(404).send({ error: "Theres no images in this endpoint" });
        return result;
    });

    fastify.get("/nsfw/:category/:id", {
        schema: {
            tags: ["NSFW"],
            params: IdCategorySchema,
            response: {
                200: z.object({ url: z.string() }),
                404: z.object({ error: z.string() })
            }
        }
    }, async (request, reply) => {
        const { category, id } = request.params as any;
        if (!nsfwEnum.includes(category)) {
            return reply.status(404).send({ error: "Invalid NSFW category" });
        }
        
        const result = await getImageById(id, category);
        if (!result) return reply.status(404).send({ error: "Image not found" });
        return result;
    });
}
