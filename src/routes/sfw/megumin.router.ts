import express from "express";
import { MeguminController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new MeguminController();
  const response = await controller.getRandomMegumin();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new MeguminController();
  const response = await controller.getMegumin(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router