import express from "express";
import { KissController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new KissController();
  const response = await controller.getRandomKiss();
  if (!response) res.status(404).send({message: "There are no images in this endpoint"})
  else
    return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new KissController();
  const response = await controller.getKiss(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router