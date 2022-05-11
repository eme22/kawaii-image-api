import express from "express";
import { WaifuController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new WaifuController();
  const response = await controller.getRandomWaifu();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new WaifuController();
  const response = await controller.getWaifu(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router