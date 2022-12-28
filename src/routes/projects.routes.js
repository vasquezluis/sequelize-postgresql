import { Router } from "express";
import {
  getProjects,
  createProjects,
  updateProject,
  deleteProject,
  getProject,
  getProjectTasks
} from "../controllers/projects.controller.js";

const router = Router();

// definir rutas

router.get("/projects", getProjects);
router.post("/projects", createProjects);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects/:id", getProject);

router.get("/projects/:id/tasks", getProjectTasks);

export default router;
