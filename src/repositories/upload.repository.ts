import { AttachmentBuilder } from "discord.js";
import { db } from "../db/index.js";
import { images, nsfwEnum } from "../db/schema.js";
import { getAdmin } from "./user.repository.js";

export interface IUploadPayload {
    userId: string;
    category: string;
}

/**
 * Uploads a file record to the database and sends a notification to an admin via Discord.
 */
export const uploadfile = async (payload: IUploadPayload, buffer: Buffer, fileName: string, bot: any) => {
    // Determine if NSFW based on category
    const nsfwList = nsfwEnum as unknown as string[];
    const isNsfw = nsfwList.includes(payload.category);

    const [data] = await db.insert(images)
        .values({
            userId: payload.userId,
            category: payload.category,
            nsfw: isNsfw,
            link: "", // Will be filled after approval or stored as Discord link
            aproved: false
        })
        .returning();

    await uploadToDiscord(buffer, data, fileName, bot);

    return data;
};

const uploadToDiscord = async (data: Buffer, payload: any, fileName: string, bot: any): Promise<string> => {
    const admin = await getAdmin();
    if (!admin) return "";
    
    try {
        const user = await bot.users.fetch(admin.id);
        if (user) {
            await user.send({ 
                content: `${payload.id}@${payload.userId}@${payload.category}@${payload.nsfw}`,
                files: [new AttachmentBuilder(data, { name: fileName })] 
            });
        }
    } catch (error) {
        console.error("Failed to send upload notification to admin:", error);
    }

    return `${admin.id}`;
};