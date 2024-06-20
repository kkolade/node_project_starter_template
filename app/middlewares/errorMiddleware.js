import dotenv from 'dotenv';
dotenv.config();

/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging purposes

  // Customize response based on error type
  if (err.name === 'ValidationError') {
    res.status(400).json({ message: err.message });
  } else {
    res.status(err.status || 500).json({
      message: err.message,
      error: process.env.NODE_ENV === 'development' ? err : {}, // Show error details in development
    });
  }
};

export default errorHandler;
