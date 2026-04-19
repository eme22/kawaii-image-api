import { Message, MessageReaction, User } from "discord.js";
import { approveImage, getImageById, removeImage } from "../repositories/image.repository.js";

/**
 * Handles message creation (reactions for admin notifications)
 */
export async function handleMessageCreate(message: Message) {
    if (message.author.bot) {
        await message.react("✅");
        await message.react("❌");
    }
}

/**
 * Handles reaction additions (Approval/Rejection logic)
 */
export async function handleReactionAdd(reaction: MessageReaction, user: User) {
    if (user.bot) return;

    const message = await reaction.message.fetch();
    const dmChannel = user.dmChannel || await user.createDM();

    // Check if the reaction is in a DM with the admin
    if (message.channelId === dmChannel.id) {
        const data = message.content.split("@");
        const id = Number(data[0]);
        if (isNaN(id)) return;

        const attachment = message.attachments.at(0);
        if (!attachment) return;

        const link = attachment.url;

        if (reaction.emoji.name === "✅") {
            const image = await getImageById(id, data[2]); // data[2] is the category
            
            if (image) {
                console.log(`Bot Approving Image ${id}...`);
                await approveImage(id, link);
            } else {
                // If it's not approved, it might be pending. Let's just approve it.
                await approveImage(id, link);
            }
        } else if (reaction.emoji.name === "❌") {
            console.log(`Bot Disapproving and Deleting Image ${id}...`);
            await removeImage(id);
            await message.delete();
        }
    }
}
