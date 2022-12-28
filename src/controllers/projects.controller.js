import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();

    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const project = await Project.findOne({ where: { id } });

    if (project == null) {
      return res.status(404).json({ message: `Project ${id} does not exists` });
    }

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProjects = async (req, res) => {
  try {
    const { name, priority, description } = req.body;

    // crear datos
    const newProject = await Project.create({ name, priority, description });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id);

    // actualizar objeto obtenido
    project.name = name;
    project.priority = priority;
    project.description = description;

    // guardar datos
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const project = await Project.destroy({
      where: {
        id,
      },
    });

    if (!project)
      return res.status(404).json({ message: `Project ${id} does not exists` });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// task project
export const getProjectTasks = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const tasks = await Task.findAll({ where: { projectId: id } });

    if (tasks.length == 0)
      return res
        .status(404)
        .json({ message: `No tasks found for project ${id}` });

    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
