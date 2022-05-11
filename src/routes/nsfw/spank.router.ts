import express from "express";
import { SpankController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new SpankController();
  const response = await controller.getRandomSpank();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new SpankController();
  const response = await controller.getSpank(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router