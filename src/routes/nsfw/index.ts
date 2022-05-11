import express from "express";

import BjRouter from "./Bj.router";
import BoobsRouter from "./Boobs.router";
import CumRouter from "./Cum.router";
import FeetRouter from "./Feet.router";
import FuckRouter from "./Fuck.router";
import FutaRouter from "./Futa.router";
import HolonsfwRouter from "./Holonsfw.router";
import LesRouter from "./Les.router";
import LewdRouter from "./Lewd.router";
import SmallboobsRouter from "./Smallboobs.router";
import SoloRouter from "./Solo.router";
import SpankRouter from "./Spank.router";
import TrapRouter from "./trap.router";

const NSFWRouter = express.Router();

NSFWRouter.use("/bj", BjRouter)
NSFWRouter.use("/boobs", BoobsRouter)
NSFWRouter.use("/cum", CumRouter)
NSFWRouter.use("/feet", FeetRouter)
NSFWRouter.use("/fuck", FuckRouter)
NSFWRouter.use("/futa", FutaRouter)
NSFWRouter.use("/holonsfw", HolonsfwRouter)
NSFWRouter.use("/les", LesRouter)
NSFWRouter.use("/lewd", LewdRouter)
NSFWRouter.use("/smallboobs", SmallboobsRouter)
NSFWRouter.use("/solo", SoloRouter)
NSFWRouter.use("/spank", SpankRouter)
NSFWRouter.use("/trap", TrapRouter)

export default NSFWRouter;