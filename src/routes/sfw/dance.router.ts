import express from "express";
import { DanceController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new DanceController();
  const response = await controller.getRandomDance();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new DanceController();
  const response = await controller.getDance(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router