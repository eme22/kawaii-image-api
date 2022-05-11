import {getRepository} from "typeorm";
import {Image, SFW, NSFW, Result} from '../models';

export interface IImagePayload {
    link: string;
    userId: string;
}

export const getRandomNeko  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :neko AND image.aproved = true", { neko: SFW.NEKO})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomKiss  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :kiss AND image.aproved = true", { kiss: SFW.KISS})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomWaifu  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :waifu AND image.aproved = true", { waifu: SFW.WAIFU})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomCry  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :cry AND image.aproved = true", { cry: SFW.CRY})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomHug  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :hug AND image.aproved = true", { hug: SFW.HUG})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomLick  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :lick AND image.aproved = true", { lick: SFW.LICK})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomPat  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :pat AND image.aproved = true", { pat: SFW.PAT})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomSmug  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :smug AND image.aproved = true", { smug: SFW.SMUG})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomBonk  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :bonk AND image.aproved = true", { bonk: SFW.BONK})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomBlush  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :blush AND image.aproved = true", { blush: SFW.BLUSH})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomSmile  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :smile AND image.aproved = true", { smile: SFW.SMILE})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomWave  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :wave AND image.aproved = true", { wave: SFW.WAVE})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomFive  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :five AND image.aproved = true", { five: SFW.FIVE})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomBite  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :bite AND image.aproved = true", { bite: SFW.BITE})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomSlap  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :slap AND image.aproved = true", { slap: SFW.SLAP})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomKick  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :kick AND image.aproved = true", { kick: SFW.KICK})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomWink  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :wink AND image.aproved = true", { wink: SFW.WINK})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomPoke  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :poke AND image.aproved = true", { poke: SFW.POKE})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomDance  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :dance AND image.aproved = true", { dance: SFW.DANCE})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomCringe  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :cringe AND image.aproved = true", { cringe: SFW.CRINGE})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomCat  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :cat AND image.aproved = true", { cat: SFW.CAT})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomPokemon  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :pokemon AND image.aproved = true", { pokemon: SFW.POKEMON})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomShinobu  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :shinobu AND image.aproved = true", { shinobu: SFW.SHINOBU})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomMegumin  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :megumin AND image.aproved = true", { megumin: SFW.MEGUMIN})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomAqua  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :aqua AND image.aproved = true", { aqua: SFW.AQUA})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomHolo  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :holo AND image.aproved = true", { holo: SFW.HOLO})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomFeet  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :feet AND image.aproved = true", { feet: NSFW.FEET})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomBlowjob  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :blowjob AND image.aproved = true", { blowjob: NSFW.BLOWJOB})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomTrap  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :trap AND image.aproved = true", { trap: NSFW.TRAP})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomSolo  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :solo AND image.aproved = true", { solo: NSFW.SOLO})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomFuck  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :fuck AND image.aproved = true", { fuck: NSFW.FUCK})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomCum  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :cum AND image.aproved = true", { cum: NSFW.CUM})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomLes  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :les AND image.aproved = true", { les: NSFW.LES})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomSpank  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :spank AND image.aproved = true", { spank: NSFW.SPANK})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomBoobs  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :boobs AND image.aproved = true", { boobs: NSFW.BOOBS})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomSmallboobs  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :smallboobs AND image.aproved = true", { smallboobs: NSFW.SMALLBOOBS})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomLewd  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :lewd AND image.aproved = true", { lewd: NSFW.LEWD})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomAnal  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :anal AND image.aproved = true", { anal: NSFW.ANAL})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomFuta  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :futa AND image.aproved = true", { futa: NSFW.FUTA})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getRandomHolonsfw  = async () :Promise<Result | null> => {
  const imageRepository = getRepository(Image);

  const image = await imageRepository
  .createQueryBuilder("image")
  .where("image.category = :holonsfw AND image.aproved = true", { holonsfw: NSFW.HOLONSFW})
  .orderBy("RANDOM()")
  .limit(1)
  .getOne()

  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getWaifu  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.WAIFU, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getKiss  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.KISS, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getNeko  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.NEKO, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getCry  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.CRY, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getHug  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.HUG, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}


export const getLick  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.LICK, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getPat  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.PAT, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getSmug  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.SMUG, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getBonk  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.BONK, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getBlush  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.BLUSH, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getSmile  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.SMILE, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getWave  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.WAVE, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getFive  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.FIVE, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getBite  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.BITE, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getSlap  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.SLAP, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getKick  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.KICK, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getWink  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.WINK, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getPoke  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.POKE, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}
export const getDance  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.DANCE, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getCringe  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.CRINGE, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getCat  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.CAT, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getPokemon  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.POKEMON, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getShinobu  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.SHINOBU, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getMegumin  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.MEGUMIN, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getAqua  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.AQUA, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getHolo  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: SFW.HOLO, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getFeet  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.FEET, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getBlowjob  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.BLOWJOB, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getTrap  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.TRAP, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}
export const getFuck  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.FUCK, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getSolo  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.SOLO, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getCum  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.CUM, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getLes  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.LES, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getSpank  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.SPANK, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getBoobs  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.BOOBS, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getSmallboobs  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.SMALLBOOBS, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getLewd  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.LEWD, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getAnal  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.ANAL, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getFuta  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.FUTA, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const getHolonsfw  = async (id: number) :Promise<Result | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({id: id, category: NSFW.HOLONSFW, aproved: true})
  if (!image) return null
  const result = new Result();
  result.link = image.link;
  return result;
}

export const createImage  = async (payload: IImagePayload, nsfw: boolean,category: SFW | NSFW) :Promise<Image> => {
    const imageRepository = getRepository(Image);
    const image = new Image()
    image.nsfw = nsfw;
    image.category = category;
    image.aproved = false;
    return imageRepository.save({
      ...image,
      ...payload
    })
}

export const removeImage  = async (id: number) :Promise<boolean> => {
  const imageRepository = getRepository(Image);
  return (await imageRepository.delete({id})).affected != 0;
}

export const aproveImage  = async (id: number, url: string) :Promise<boolean> => {
  const imageRepository = getRepository(Image);
  return (await imageRepository.update({id},{
    link: url,
    aproved: true
  })).affected != 0;
}

export const isImageAproved = async (id: number) : Promise<boolean | null> => {
  const imageRepository = getRepository(Image);
  const image = (await imageRepository.findOne(id));
  if (image)
    return image.aproved;
  else
    return null;
  
}