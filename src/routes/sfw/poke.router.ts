import express from "express";
import { PokeController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new PokeController();
  const response = await controller.getRandomPoke();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new PokeController();
  const response = await controller.getPoke(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router