import { FastifyInstance } from "fastify";
import { uploadfile } from "../../repositories/upload.repository.js";

export async function uploadRoutes(fastify: FastifyInstance, options: any) {
    const { bot } = options;

    fastify.post("/upload", {
        schema: {
            tags: ["Upload"],
            description: "Upload an image for approval"
        }
    }, async (request, reply) => {
        const data = await request.file();
        if (!data) return reply.status(400).send({ error: "No file uploaded" });

        // Extract metadata from fields (Fastify multipart handles this)
        const userId = (data.fields.userId as any)?.value;
        const category = (data.fields.category as any)?.value;

        if (!userId || !category) {
            return reply.status(400).send({ error: "Missing metadata (userId or category)" });
        }

        const buffer = await data.toBuffer();
        const result = await uploadfile({ userId, category }, buffer, data.filename, bot);

        return { success: true, id: result?.id };
    });
}
