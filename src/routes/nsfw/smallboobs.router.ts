import express from "express";
import { SmallboobsController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new SmallboobsController();
  const response = await controller.getRandomSmallboobs();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new SmallboobsController();
  const response = await controller.getSmallboobs(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router