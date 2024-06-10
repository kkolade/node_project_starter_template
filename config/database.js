import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const databaseUrl = `postgres://${process.env.dbUserName}:${process.env.dbPassword}@${process.env.dbHost}:${process.env.dbPort}/${process.env.databaseName}`;

if (!databaseUrl) {
  throw new Error('databaseUrl is not defined in the environment variables');
}

// Database configuration
const sequelize = new Sequelize(databaseUrl, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Disable logging; default: console.log
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      'Connection to the database has been established successfully.'
    );
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
