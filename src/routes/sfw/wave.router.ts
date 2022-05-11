import express from "express";
import { WaveController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new WaveController();
  const response = await controller.getRandomWave();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new WaveController();
  const response = await controller.getWave(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router