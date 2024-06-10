import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

// Database configuration
const sequelize = new Sequelize(process.env.DATABASE_URL, {
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
