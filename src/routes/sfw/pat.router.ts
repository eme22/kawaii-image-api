import express from "express";
import { PatController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new PatController();
  const response = await controller.getRandomPat();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new PatController();
  const response = await controller.getPat(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router