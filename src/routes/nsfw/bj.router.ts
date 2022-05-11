import express from "express";
import { BlowjobController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new BlowjobController();
  const response = await controller.getRandomBlowjob();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new BlowjobController();
  const response = await controller.getBlowjob(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router