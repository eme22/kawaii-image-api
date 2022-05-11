import express from "express";
import { AquaController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new AquaController();
  const response = await controller.getRandomAqua();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new AquaController();
  const response = await controller.getAqua(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router