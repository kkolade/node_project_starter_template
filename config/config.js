import dotenv from 'dotenv';
dotenv.config();

// Validate that required environment variables are provided
const requiredEnvVars = [
  'dbUserName',
  'dbPassword',
  'databaseName',
  'dbHost',
  'dbDialect',
];
requiredEnvVars.forEach((envVar) => {
  if (!(envVar in process.env)) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

// Export the configuration object
export default {
  development: {
    username: process.env.dbUserName,
    password: process.env.dbPassword,
    database: process.env.databaseName,
    host: process.env.dbHost,
    dialect: process.env.dbDialect,
    // Add other configuration options as needed
  },
};
