import express from "express";
import { KickController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new KickController();
  const response = await controller.getRandomKick();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new KickController();
  const response = await controller.getKick(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router