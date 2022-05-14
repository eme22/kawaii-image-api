import express from "express";
import { FeetController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new FeetController();
  const response = await controller.getRandomFeet();
  if (!response) return res.status(404).send({message: "There are no images in this endpoint"})
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new FeetController();
  const response = await controller.getFeet(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router