import express from "express";

import AnalRouter from "./anal.router"
import BjRouter from "./bj.router";
import BoobsRouter from "./boobs.router";
import CumRouter from "./cum.router";
import FeetRouter from "./feet.router";
import FuckRouter from "./fuck.router";
import FutaRouter from "./futa.router";
import HolonsfwRouter from "./holonsfw.router";
import LesRouter from "./les.router";
import LewdRouter from "./lewd.router";
import SmallboobsRouter from "./smallboobs.router";
import SoloRouter from "./solo.router";
import SpankRouter from "./spank.router";
import TrapRouter from "./trap.router";

const NSFWRouter = express.Router();

NSFWRouter.use("/anal", AnalRouter)
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