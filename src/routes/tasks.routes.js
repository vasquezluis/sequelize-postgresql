import { Router } from "express";
import {
  createTasks,
  deleteTasks,
  getTask,
  getTasks,
  updateTasks,
} from "../controllers/tasks.controller.js";

const router = Router();

// rutas
router.get("/tasks", getTasks);
router.post("/tasks", createTasks);
router.put("/tasks/:id", updateTasks);
router.delete("/tasks/:id", deleteTasks);
router.get("/tasks/:id", getTask);

export default router;
