import express from "express";
import { CringeController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new CringeController();
  const response = await controller.getRandomCringe();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new CringeController();
  const response = await controller.getCringe(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router