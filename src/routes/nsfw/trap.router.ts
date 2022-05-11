import express from "express";
import { TrapController } from "../../controllers/image.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new TrapController();
  const response = await controller.getRandomTrap();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new TrapController();
  const response = await controller.getTrap(req.params.id);
  if (!response) res.status(404).send({message: "No image found"})
  return res.send(response);
});

export default router