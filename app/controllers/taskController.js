import asyncHandler from 'express-async-handler';
import Task from '../models/taskModel.js';

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.status(200).json(task);
});

const addTask = asyncHandler(async (req, res) => {
  const reqBody = req.body;
  if (Object.keys(reqBody).length === 0 && reqBody.constructor === Object) {
    res.status(400).json({ message: 'Please enter a task' });
  }
  const task = new Task(reqBody);
  await task.save();
  res.status(200).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error('Task not found');
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error('Task not found');
  }
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

export { addTask, deleteTask, getAllTasks, getTaskById, updateTask };
