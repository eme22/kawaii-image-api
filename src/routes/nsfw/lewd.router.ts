import express from "express";
import { LewdController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new LewdController();
  const response = await controller.getRandomLewd();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new LewdController();
  const response = await controller.getLewd(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router