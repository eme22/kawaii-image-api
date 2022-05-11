import express from "express";
import SFWRouter from "./sfw";
import NSFWRouter from "./nsfw";
import UploadRouter from "./upload.router";
import { SFW, NSFW } from "../models";

const router = express.Router();

router.use("/upload", UploadRouter)

router.use("/sfw", SFWRouter)
router.use("/nsfw", NSFWRouter)

router.get('/user_data', function(req, res) {

  if (req.user === undefined) {
      res.status(404).json({message: "not logged"});
  } else {
      res.json(req.user);
  }
});

router.get('/endpoints/sfw', function(_req, res) {

  res.json(Object.values(SFW));

});

router.get('/endpoints/nsfw', function(_req, res) {

  res.json(Object.values(NSFW));

});

export default router;
