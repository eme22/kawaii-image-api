import express from "express";
import { FiveController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new FiveController();
  const response = await controller.getRandomFive();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new FiveController();
  const response = await controller.getFive(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router