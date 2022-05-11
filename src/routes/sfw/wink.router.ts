import express from "express";
import { WinkController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new WinkController();
  const response = await controller.getRandomWink();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new WinkController();
  const response = await controller.getWink(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router