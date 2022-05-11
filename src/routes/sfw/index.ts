import express from "express";
import UserRouter from "./user.router";

import AquaRouter from "./aqua.router";
import BiteRouter from "./Bite.router";
import BlushRouter from "./Blush.router";
import BonkRouter from "./Bonk.router";
import CatRouter from "./Cat.router";
import CringeRouter from "./Cringe.router";
import CryRouter from "./Cry.router";
import DanceRouter from "./Dance.router";
import FiveRouter from "./Five.router";
import HoloRouter from "./Holo.router";
import HugRouter from "./Hug.router";
import KickRouter from "./Kick.router";
import KissRouter from "./Kiss.router";
import LickRouter from "./Lick.router";
import MeguminRouter from "./Megumin.router";
import NekoRouter from "./Neko.router";
import PatRouter from "./Pat.router";
import PokeRouter from "./Poke.router";
import PokemonRouter from "./Pokemon.router";
import ShinobuRouter from "./Shinobu.router";
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