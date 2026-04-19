import { FastifyInstance } from "fastify";
import { z } from "zod";
import { getPendingImages, approveImage, removeImage } from "../../repositories/image.repository.js";

const IdParamSchema = z.object({
    id: z.string().regex(/^\d+$/).transform(Number)
});

export async function adminRoutes(fastify: FastifyInstance, options: any) {
    const { bot } = options;

    fastify.get("/admin/pending", {
        schema: {
            tags: ["Admin"],
            description: "Get all pending images with pagination",
            querystring: z.object({
                page: z.string().optional().default("1").transform(Number),
                limit: z.string().optional().default("10").transform(Number)
            })
        }
    }, async (request) => {
        const { page, limit } = request.query as any;
        return await getPendingImages(bot, page, limit);
    });

    fastify.post("/admin/approve/:id", {
        schema: {
            tags: ["Admin"],
            params: IdParamSchema,
            response: {
                200: z.object({ success: z.boolean() })
            }
        }
    }, async (request, reply) => {
        const { id } = request.params as any;
        await approveImage(id);
        return { success: true };
    });

    fastify.delete("/admin/reject/:id", {
        schema: {
            tags: ["Admin"],
            params: IdParamSchema,
            response: {
                200: z.object({ success: z.boolean() })
            }
        }
    }, async (request, reply) => {
        const { id } = request.params as any;
        await removeImage(id);
        return { success: true };
    });
}
