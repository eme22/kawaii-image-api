import express from "express";
import { CryController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new CryController();
  const response = await controller.getRandomCry();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new CryController();
  const response = await controller.getCry(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router