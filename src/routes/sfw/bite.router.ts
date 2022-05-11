import express from "express";
import { BiteController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new BiteController();
  const response = await controller.getRandomBite();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new BiteController();
  const response = await controller.getBite(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router