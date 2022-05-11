import express from "express";
import { SmileController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new SmileController();
  const response = await controller.getRandomSmile();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new SmileController();
  const response = await controller.getSmile(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router