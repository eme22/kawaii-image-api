import { FastifyInstance } from "fastify";
import { z } from "zod";
import { getUsers, createUser, getUser, getAdmin, setAdmin } from "../../repositories/user.repository.js";

const UserPayloadSchema = z.object({
    id: z.string(),
    name: z.string()
});

const IdParamSchema = z.object({
    id: z.string()
});

export async function userRoutes(fastify: FastifyInstance) {

    fastify.get("/user_data", {
        schema: {
            tags: ["User"],
            description: "Get current logged user data"
        }
    }, async (request) => {
        return (request.session as any).user || { message: "Not logged in" };
    });

    fastify.get("/users", {
        schema: {
            tags: ["User"],
            description: "Get all users"
        }
    }, async () => {
        return await getUsers();
    });

    fastify.post("/user", {
        schema: {
            tags: ["User"],
            body: UserPayloadSchema,
            response: {
                201: z.object({ 
                    id: z.string(),
                    name: z.string(),
                    admin: z.boolean()
                })
            }
        }
    }, async (request, reply) => {
        const user = await createUser(request.body as any);
        return reply.status(201).send(user);
    });

    fastify.get("/user/:id", {
        schema: {
            tags: ["User"],
            params: IdParamSchema,
            response: {
                200: z.any().nullable(),
                404: z.object({ error: z.string() })
            }
        }
    }, async (request, reply) => {
        const { id } = request.params as any;
        const user = await getUser(id);
        if (!user) return reply.status(404).send({ error: "User not found" });
        return user;
    });

    fastify.get("/admin/random", {
        schema: {
            tags: ["User"],
            description: "Gets a random admin user"
        }
    }, async () => {
        return await getAdmin();
    });

    fastify.post("/user/:id/admin", {
        schema: {
            tags: ["User"],
            params: IdParamSchema,
            response: {
                200: z.object({ success: z.boolean() }),
                404: z.object({ error: z.string() })
            }
        }
    }, async (request, reply) => {
        const { id } = request.params as any;
        const success = await setAdmin(id);
        if (!success) return reply.status(404).send({ error: "User not found" });
        return { success };
    });
}
