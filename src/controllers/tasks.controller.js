import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const task = await Task.findOne({ where: { id }, attributes: ["name"] });

    if (!task)
      return res.status(404).json({ message: `Task ${id} does not exists` });

    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;

    const newTask = await Task.create({ name, done, projectId });

    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const task = await Task.findOne({ where: { id } });
    task.set(req.body);

    // guardar datos
    await task.save();

    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const task = await Task.destroy({ where: { id } });

    if (!task)
      return res.status(404).json({ message: `Task ${id} does not exists` });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
