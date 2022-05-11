import express from "express";
import { HoloController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new HoloController();
  const response = await controller.getRandomHolo();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new HoloController();
  const response = await controller.getHolo(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router