import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { eq, sql } from "drizzle-orm";

export interface IUserPayload {
    id: string;
    name: string;
}

export const getUsers = async () => {
    return await db.select().from(users);
};

export const createUser = async (payload: IUserPayload) => {
    const [user] = await db.insert(users)
        .values({
            id: payload.id,
            name: payload.name,
        })
        .returning();
    return user;
};

export const getUser = async (id: string) => {
    const [user] = await db.select()
        .from(users)
        .where(eq(users.id, id))
        .limit(1);
    return user || null;
};

export const getAdmin = async () => {
    const adminUsers = await db.select()
        .from(users)
        .where(eq(users.admin, true))
        .orderBy(sql`RANDOM()`)
        .limit(1);
    return adminUsers[0] || null;
};

export const setAdmin = async (id: string) => {
    const result = await db.update(users)
        .set({ admin: true })
        .where(eq(users.id, id));
    
    // In node-postgres, the result from update provides rowCount
    return result.rowCount !== 0;
};

export const upsertUser = async (payload: IUserPayload & { avatar?: string }) => {
    const [user] = await db.insert(users)
        .values({
            id: payload.id,
            name: payload.name,
            avatar: payload.avatar,
        })
        .onConflictDoUpdate({
            target: users.id,
            set: {
                name: payload.name,
                avatar: payload.avatar,
            }
        })
        .returning();
    return user;
};