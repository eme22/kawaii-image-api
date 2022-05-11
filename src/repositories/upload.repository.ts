import { User } from "discord.js";
import { bot } from "..";
import { getRepository } from "typeorm";
import {SFW, NSFW, Image} from '../models'
import { getAdmin } from "./user.repository";

export interface IUploadPayload {
    userId: string;
    category: SFW | NSFW;
    data: File;
}

export const uploadfile  = async (payload: IUploadPayload, buffer: Buffer) :Promise<Image | null> => {
  
    const imageRepository = getRepository(Image);

    const image = new Image();
    image.category = payload.category;
    image.userId = payload.userId;
    image.nsfw = (<any>Object).values(NSFW).includes(payload.category);
    image.link = "";


    const data = await imageRepository.save({
      ...image
    })

    await uploadToDiscord(buffer, data);

    return data;
  }

const uploadToDiscord = async (data: Buffer, payload: Image) : Promise<string> => {

    const admin = await getAdmin()
    
    bot.users.fetch(admin.id).then((user: User) => {
      user.send({ 
        content: `${payload.id}@${payload.userId}@${payload.category}@${payload.nsfw}`,
        files: [data] 
      });
     });

    return `${admin}`;
}