// Node core modules

// Express
import express from 'express';

// Dependencies modules
import bodyParser from 'body-parser';
import cors from 'cors';

import connectDB from '../config/database.js';

import errorHandler from './middlewares/errorMiddleware.js';
import taskRoutes from './routes/taskRoutes.js';

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', taskRoutes);

// Error Handler
app.use(errorHandler);

export default app;
