import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";
import { aproveImage, isImageAproved, removeImage } from "../repositories/image.repository";

@Discord()
export class Example {
  @On("messageCreate")
  async onMessage([message]: ArgsOf<"messageCreate">, client: Client): Promise<void> {
      if (message.author.bot) {
          message.react("✅");
          message.react("❌");
      }
  }

  @On("messageDelete")
  onMessage2([message]: ArgsOf<"messageDelete">, client: Client): void {
    if (message?.author?.bot) {
      console.log("Message Deleted", message.content, message.attachments.at(0)?.url);
    }
}

  @On("messageReactionAdd")
  async emoji([reaction, user]: ArgsOf<"messageReactionAdd">, client: Client): Promise<void> {
      var message = await reaction.message.fetch();

      if ( message.channelId == user.dmChannel?.id) {
          const data = message.content.split("@");
          const id = data.at(0);


          const attachment = message.attachments.at(0);

          if (attachment != null) {
            const link = attachment.url;

            if (reaction.emoji.name == "✅") {

              const  approved = await isImageAproved(Number(id));

              if (approved != null) {
                  if (approved) {
                    console.log("Image Already Aproved...");
                  }
                  else {
                    console.log("Bot Aproving Image...");
                    aproveImage(Number(id), link);
                  }
              }

              console.log("Image does not exist...", attachment);     
            }
            else if (reaction.emoji.name == "❌") {
              console.log("Bot Disaproving and Deleting Image...");
              removeImage(Number(id));
              message.delete();
            } 
          }
          
    }
    
    
      
  }
}