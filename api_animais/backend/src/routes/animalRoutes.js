import { Router } from "express";
import { animalController } from "../controllers/animalController.js";

const router = Router();


router.get("/animals", animalController.getAll);
router.get("/animals/:id", animalController.getById);
router.post('/animals', animalController.create);
router.get('/animals/:id', animalController.update);
router.patch('/animals/:id', animalController.patch);
router.delete('/animals/:id', animalController.delete);

export default router;
