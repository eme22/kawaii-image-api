import express from "express";
import { FutaController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new FutaController();
  const response = await controller.getRandomFuta();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new FutaController();
  const response = await controller.getFuta(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router