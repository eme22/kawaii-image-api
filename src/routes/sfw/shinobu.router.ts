import express from "express";
import { ShinobuController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ShinobuController();
  const response = await controller.getRandomShinobu();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ShinobuController();
  const response = await controller.getShinobu(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router