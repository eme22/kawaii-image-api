import { Get, Route, Tags,  Body, Path, Response } from "tsoa";
import {SFW, NSFW, Image, Result, Error} from '../models'
import { createImage, getAnal, getAqua, getBite, getBlowjob, getBlush, getBonk, getBoobs, getCat, getCringe, getCry, getCum, getDance, getFeet, getFive, getFuck, getFuta, getHolo, getHolonsfw, getHug, getKick, getKiss, getLes, getLewd, getLick, getMegumin, getNeko, getPat, getPoke, getPokemon, getRandomAnal, getRandomAqua, getRandomBite, getRandomBlowjob, getRandomBlush, getRandomBonk, getRandomBoobs, getRandomCat, getRandomCringe, getRandomCry, getRandomCum, getRandomDance, getRandomFeet, getRandomFive, getRandomFuck, getRandomFuta, getRandomHolo, getRandomHolonsfw, getRandomHug, getRandomKick, getRandomKiss, getRandomLes, getRandomLewd, getRandomLick, getRandomMegumin, getRandomNeko, getRandomPat, getRandomPoke, getRandomPokemon, getRandomShinobu, getRandomSlap, getRandomSmallboobs, getRandomSmile, getRandomSmug, getRandomSolo, getRandomSpank, getRandomTrap, getRandomWaifu, getRandomWave, getRandomWink, getShinobu, getSlap, getSmallboobs, getSmile, getSmug, getSolo, getSpank, getTrap, getWaifu, getWave, getWink, IImagePayload } from "../repositories/image.repository";


@Route("sfw/neko")
@Tags("SFW")
export class NekoController {
  /**
   * Retrieves a random Neko link
   */
  
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomNeko() {
    return getRandomNeko();
  }
  
  //@Post("/")
  public async createNeko(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.NEKO)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getNeko(@Path() id: string): Promise<Result | null> {
    return getNeko(Number(id))
  }
}

@Route("sfw/kiss")
@Tags("SFW")
export class KissController {
  /**
   * Retrieves a random Kissing GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomKiss() {
    return getRandomKiss();
  }
  
  //@Post("/")
  public async createKiss(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.KISS)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getKiss(@Path() id: string): Promise<Result | null> {
    return getKiss(Number(id))
  }
}

@Route("sfw/waifu")
@Tags("SFW")
export class WaifuController {

  /**
   * Retrieves a random Waifu link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomWaifu() {
    return getRandomWaifu();
  }
  //@Post("/")
  public async createWaifu(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.WAIFU)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getWaifu(@Path() id: string): Promise<Result | null> {
    return getWaifu(Number(id))
  }
}

@Route("sfw/cry")
@Tags("SFW")
export class CryController {

  /**
   * Retrieves a random Crying GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomCry() {
    return getRandomCry();
  }
  //@Post("/")
  public async createCry(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.CRY)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getCry(@Path() id: string): Promise<Result | null> {
    return getCry(Number(id))
  }
}

@Route("sfw/hug")
@Tags("SFW")
export class HugController {

  /**
   * Retrieves a random Huging GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomHug() {
    return getRandomHug();
  }
  //@Post("/")
  public async createHug(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.HUG)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getHug(@Path() id: string): Promise<Result | null> {
    return getHug(Number(id))
  }
}


@Route("sfw/lick")
@Tags("SFW")
export class LickController {

  /**
   * Retrieves a random Licking GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomLick() {
    return getRandomLick();
  }
  //@Post("/")
  public async createLick(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.LICK)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getLick(@Path() id: string): Promise<Result | null> {
    return getLick(Number(id))
  }
}


@Route("sfw/pat")
@Tags("SFW")
export class PatController {

  /**
   * Retrieves a random Patting GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomPat() {
    return getRandomPat();
  }
  //@Post("/")
  public async createPat(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.PAT)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getPat(@Path() id: string): Promise<Result | null> {
    return getPat(Number(id))
  }
}

@Route("sfw/smug")
@Tags("SFW")
export class SmugController {

  /**
   * Retrieves a random Smugging GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomSmug() {
    return getRandomSmug();
  }
  //@Post("/")
  public async createSmug(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.SMUG)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getSmug(@Path() id: string): Promise<Result | null> {
    return getSmug(Number(id))
  }
}

@Route("sfw/bonk")
@Tags("SFW")
export class BonkController {

  /**
   * Retrieves a random Bonking GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomBonk() {
    return getRandomBonk();
  }
  //@Post("/")
  public async createBonk(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.BONK)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getBonk(@Path() id: string): Promise<Result | null> {
    return getBonk(Number(id))
  }
}

@Route("sfw/blush")
@Tags("SFW")
export class BlushController {

  /**
   * Retrieves a random Blushing GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomBlush() {
    return getRandomBlush();
  }
  //@Post("/")
  public async createBlush(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.BLUSH)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getBlush(@Path() id: string): Promise<Result | null> {
    return getBlush(Number(id))
  }
}

@Route("sfw/smile")
@Tags("SFW")
export class SmileController {

  /**
   * Retrieves a random Smiling GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomSmile() {
    return getRandomSmile();
  }
  //@Post("/")
  public async createSmile(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.SMILE)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getSmile(@Path() id: string): Promise<Result | null> {
    return getSmile(Number(id))
  }
}

@Route("sfw/wave")
@Tags("SFW")
export class WaveController {

  /**
   * Retrieves a random Waving GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomWave() {
    return getRandomWave();
  }
  //@Post("/")
  public async createWave(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.WAVE)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getWave(@Path() id: string): Promise<Result | null> {
    return getWave(Number(id))
  }
}

@Route("sfw/five")
@Tags("SFW")
export class FiveController {

  /**
   * Retrieves a random Taking-Five GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomFive() {
    return getRandomFive();
  }
  //@Post("/")
  public async createFive(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.FIVE)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getFive(@Path() id: string): Promise<Result | null> {
    return getFive(Number(id))
  }
}

@Route("sfw/bite")
@Tags("SFW")
export class BiteController {

  /**
   * Retrieves a random Bitting GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomBite() {
    return getRandomBite();
  }
  //@Post("/")
  public async createBite(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.BITE)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getBite(@Path() id: string): Promise<Result | null> {
    return getBite(Number(id))
  }
}

@Route("sfw/slap")
@Tags("SFW")
export class SlapController {

  /**
   * Retrieves a random Slapping GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomSlap() {
    return getRandomSlap();
  }
  //@Post("/")
  public async createSlap(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.SLAP)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getSlap(@Path() id: string): Promise<Result | null> {
    return getSlap(Number(id))
  }
}

@Route("sfw/kick")
@Tags("SFW")
export class KickController {

  /**
   * Retrieves a random Kicking GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomKick() {
    return getRandomKick();
  }
  //@Post("/")
  public async createKick(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.KICK)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getKick(@Path() id: string): Promise<Result | null> {
    return getKick(Number(id))
  }
}

@Route("sfw/wink")
@Tags("SFW")
export class WinkController {

  /**
   * Retrieves a random Winking GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomWink() {
    return getRandomWink();
  }
  //@Post("/")
  public async createWink(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.WINK)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getWink(@Path() id: string): Promise<Result | null> {
    return getWink(Number(id))
  }
}

@Route("sfw/poke")
@Tags("SFW")
export class PokeController {

  /**
   * Retrieves a random Poking GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomPoke() {
    return getRandomPoke();
  }
  //@Post("/")
  public async createPoke(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.POKE)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getPoke(@Path() id: string): Promise<Result | null> {
    return getPoke(Number(id))
  }
}

@Route("sfw/dance")
@Tags("SFW")
export class DanceController {

  /**
   * Retrieves a random Dancing GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomDance() {
    return getRandomDance();
  }
  //@Post("/")
  public async createDance(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.DANCE)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getDance(@Path() id: string): Promise<Result | null> {
    return getDance(Number(id))
  }
}

@Route("sfw/cringe")
@Tags("SFW")
export class CringeController {

  /**
   * Retrieves a random Cringe GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomCringe() {
    return getRandomCringe();
  }
  //@Post("/")
  public async createCringe(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.CRINGE)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getCringe(@Path() id: string): Promise<Result | null> {
    return getCringe(Number(id))
  }
}

@Route("sfw/cat")
@Tags("SFW")
export class CatController {

  /**
   * Retrieves a random Cat link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomCat() {
    return getRandomCat();
  }
  //@Post("/")
  public async createCat(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.CAT)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getCat(@Path() id: string): Promise<Result | null> {
    return getCat(Number(id))
  }
}

@Route("sfw/pokemon")
@Tags("SFW")
export class PokemonController {

  /**
   * Retrieves a random Pokemon link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomPokemon() {
    return getRandomPokemon();
  }
  //@Post("/")
  public async createPokemon(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.POKEMON)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getPokemon(@Path() id: string): Promise<Result | null> {
    return getPokemon(Number(id))
  }
}

@Route("sfw/shinobu")
@Tags("SFW")
export class ShinobuController {

  /**
   * Retrieves a random Shinubu link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomShinobu() {
    return getRandomShinobu();
  }
  //@Post("/")
  public async createShinobu(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.SHINOBU)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getShinobu(@Path() id: string): Promise<Result | null> {
    return getShinobu(Number(id))
  }
}

@Route("sfw/megumin")
@Tags("SFW")
export class MeguminController {

  /**
   * Retrieves a random Megumin link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomMegumin() {
    return getRandomMegumin();
  }
  //@Post("/")
  public async createMegumin(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.MEGUMIN)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getMegumin(@Path() id: string): Promise<Result | null> {
    return getMegumin(Number(id))
  }
}

@Route("sfw/aqua")
@Tags("SFW")
export class AquaController {

  /**
   * Retrieves a random Aqua link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomAqua() {
    return getRandomAqua();
  }
  //@Post("/")
  public async createAqua(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.AQUA)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getAqua(@Path() id: string): Promise<Result | null> {
    return getAqua(Number(id))
  }
}

@Route("sfw/holo")
@Tags("SFW")
export class HoloController {

  /**
   * Retrieves a random Hololive link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomHolo() {
    return getRandomHolo();
  }
  //@Post("/")
  public async createHolo(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, SFW.HOLO)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getHolo(@Path() id: string): Promise<Result | null> {
    return getHolo(Number(id))
  }
}

@Route("nsfw/feet")
@Tags("NSFW")
export class FeetController {

  /**
   * Retrieves a random Feet link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomFeet() {
    return getRandomFeet();
  }
  //@Post("/")
  public async createFeet(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.FEET)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getFeet(@Path() id: string): Promise<Result | null> {
    return getFeet(Number(id))
  }
}

@Route("nsfw/blowjob")
@Tags("NSFW")
export class BlowjobController {

  /**
   * Retrieves a random BJ GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomBlowjob() {
    return getRandomBlowjob();
  }
  //@Post("/")
  public async createBlowjob(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.BLOWJOB)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getBlowjob(@Path() id: string): Promise<Result | null> {
    return getBlowjob(Number(id))
  }
}

@Route("nsfw/trap")
@Tags("NSFW")
export class TrapController {

  /**
   * Retrieves a random Trap link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomTrap() {
    return getRandomTrap();
  }
  //@Post("/")
  public async createTrap(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.TRAP)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getTrap(@Path() id: string): Promise<Result | null> {
    return getTrap(Number(id))
  }
}

@Route("nsfw/fuck")
@Tags("NSFW")
export class FuckController {

  /**
   * Retrieves a random F**K GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomFuck() {
    return getRandomFuck();
  }
  //@Post("/")
  public async createFuck(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.FUCK)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getFuck(@Path() id: string): Promise<Result | null> {
    return getFuck(Number(id))
  }
}

@Route("nsfw/solo")
@Tags("NSFW")
export class SoloController {

  /**
   * Retrieves a random Solo GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomSolo() {
    return getRandomSolo();
  }
  //@Post("/")
  public async createSolo(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.SOLO)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getSolo(@Path() id: string): Promise<Result | null> {
    return getSolo(Number(id))
  }
}

@Route("nsfw/cum")
@Tags("NSFW")
export class CumController {

  /**
   * Retrieves a random C*M GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomCum() {
    return getRandomCum();
  }
  //@Post("/")
  public async createCum(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.CUM)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getCum(@Path() id: string): Promise<Result | null> {
    return getCum(Number(id))
  }
}

@Route("nsfw/les")
@Tags("NSFW")
export class LesController {

  /**
   * Retrieves a random Les GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomLes() {
    return getRandomLes();
  }
  //@Post("/")
  public async createLes(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.LES)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getLes(@Path() id: string): Promise<Result | null> {
    return getLes(Number(id))
  }
}

@Route("nsfw/spank")
@Tags("NSFW")
export class SpankController {

  /**
   * Retrieves a random Spank GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomSpank() {
    return getRandomSpank();
  }
  //@Post("/")
  public async createSpank(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.SPANK)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getSpank(@Path() id: string): Promise<Result | null> {
    return getSpank(Number(id))
  }
}

@Route("nsfw/boobs")
@Tags("NSFW")
export class BoobsController {

  /**
   * Retrieves a random B**bs GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomBoobs() {
    return getRandomBoobs();
  }
  //@Post("/")
  public async createBoobs(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.BOOBS)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getBoobs(@Path() id: string): Promise<Result | null> {
    return getBoobs(Number(id))
  }
}

@Route("nsfw/smallboobs")
@Tags("NSFW")
export class SmallboobsController {

  /**
   * Retrieves a random Small B**bs GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomSmallboobs() {
    return getRandomSmallboobs();
  }
  //@Post("/")
  public async createSmallboobs(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.SMALLBOOBS)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getSmallboobs(@Path() id: string): Promise<Result | null> {
    return getSmallboobs(Number(id))
  }
}

@Route("nsfw/lewd")
@Tags("NSFW")
export class LewdController {

  /**
   * Retrieves a random Lewd link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomLewd() {
    return getRandomLewd();
  }
  //@Post("/")
  public async createLewd(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.LEWD)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getLewd(@Path() id: string): Promise<Result | null> {
    return getLewd(Number(id))
  }
}

@Route("nsfw/anal")
@Tags("NSFW")
export class AnalController {

  /**
   * Retrieves a random Anal GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomAnal() {
    return getRandomAnal();
  }
  //@Post("/")
  public async createAnal(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.ANAL)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getAnal(@Path() id: string): Promise<Result | null> {
    return getAnal(Number(id))
  }
}

@Route("nsfw/futa")
@Tags("NSFW")
export class FutaController {

  /**
   * Retrieves a random Futa GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomFuta() {
    return getRandomFuta();
  }
  //@Post("/")
  public async createFuta(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.FUTA)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getFuta(@Path() id: string): Promise<Result | null> {
    return getFuta(Number(id))
  }
}

@Route("nsfw/holonsfw")
@Tags("NSFW")
export class HolonsfwController {

  /**
   * Retrieves a random Holonsfw GIF link
   */
  @Response<Error>(404, "Theres no images in this endpoint")
  @Get("/")
  getRandomHolonsfw() {
    return getRandomHolonsfw();
  }
  //@Post("/")
  public async createHolonsfw(@Body() body: IImagePayload): Promise<Image> {
    return createImage(body, false, NSFW.HOLONSFW)
  }

  @Response<Error>(404, "Image not found")
  @Get("/:id")
  public async getHolonsfw(@Path() id: string): Promise<Result | null> {
    return getHolonsfw(Number(id))
  }
}

