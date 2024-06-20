import express from 'express';
const router = express.Router();

import {
  addTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from '../controllers/taskController.js';

router.get('/', getAllTasks);

router.get('/:id', getTaskById);

router.post('/add', addTask);

router.put('/update/:id', updateTask);

router.delete('/delete/:id', deleteTask);

export default router;
