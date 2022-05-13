import express from "express";
import { AnalController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new AnalController();
  const response = await controller.getRandomAnal();
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new AnalController();
  const response = await controller.getAnal(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router