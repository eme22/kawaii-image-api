import express from "express";
import { LickController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new LickController();
  const response = await controller.getRandomLick();
  if (!response) return res.status(404).send({message: "There are no images in this endpoint"})
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new LickController();
  const response = await controller.getLick(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});


export default router