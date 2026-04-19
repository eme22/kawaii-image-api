import { FastifyInstance } from "fastify";
import { z } from "zod";
import { getPendingImages, approveImage, removeImage } from "../../repositories/image.repository.js";

const IdParamSchema = z.object({
    id: z.string().regex(/^\d+$/).transform(Number)
});

export async function adminRoutes(fastify: FastifyInstance) {

    fastify.get("/admin/pending", {
        schema: {
            tags: ["Admin"],
            description: "Get all pending images"
        }
    }, async () => {
        return await getPendingImages();
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
