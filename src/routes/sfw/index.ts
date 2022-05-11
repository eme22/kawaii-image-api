import express from "express";
import UserRouter from "./user.router";

import AquaRouter from "./aqua.router";
import BiteRouter from "./bite.router";
import BlushRouter from "./blush.router";
import BonkRouter from "./bonk.router";
import CatRouter from "./cat.router";
import CringeRouter from "./cringe.router";
import CryRouter from "./cry.router";
import DanceRouter from "./dance.router";
import FiveRouter from "./five.router";
import HoloRouter from "./holo.router";
import HugRouter from "./hug.router";
import KickRouter from "./kick.router";
import KissRouter from "./kiss.router";
import LickRouter from "./lick.router";
import MeguminRouter from "./megumin.router";
import NekoRouter from "./neko.router";
import PatRouter from "./pat.router";
import PokeRouter from "./poke.router";
import PokemonRouter from "./pokemon.router";
import ShinobuRouter from "./shinobu.router";
import SlapRouter from "./slap.router";
import SmileRouter from "./smile.router";
import SmugRouter from "./smug.router";
import WaveRouter from "./wave.router";
import WinkRouter from "./wink.router";
import WaifuRouter from "./waifu.router";

const SFWRouter = express.Router();

SFWRouter.use("/users", UserRouter)

SFWRouter.use("/aqua", AquaRouter)
SFWRouter.use("/bite", BiteRouter)
SFWRouter.use("/blush", BlushRouter)
SFWRouter.use("/bonk", BonkRouter)
SFWRouter.use("/cat", CatRouter)
SFWRouter.use("/cringe", CringeRouter)
SFWRouter.use("/cry", CryRouter)
SFWRouter.use("/dance", DanceRouter)
SFWRouter.use("/five", FiveRouter)
SFWRouter.use("/holo", HoloRouter)
SFWRouter.use("/hug", HugRouter)
SFWRouter.use("/kick", KickRouter)
SFWRouter.use("/kiss", KissRouter)
SFWRouter.use("/lick", LickRouter)
SFWRouter.use("/megumin", MeguminRouter)
SFWRouter.use("/neko", NekoRouter)
SFWRouter.use("/pat", PatRouter)
SFWRouter.use("/poke", PokeRouter)
SFWRouter.use("/pokemon", PokemonRouter)
SFWRouter.use("/shinobu", ShinobuRouter)
SFWRouter.use("/slap", SlapRouter)
SFWRouter.use("/smile", SmileRouter)
SFWRouter.use("/waifu", WaifuRouter)
SFWRouter.use("/wink", WinkRouter)
SFWRouter.use("/smug", SmugRouter)
SFWRouter.use("/wave", WaveRouter)

export default SFWRouter;