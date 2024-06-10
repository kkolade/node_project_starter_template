// Node core modules

// Express
import express from 'express';

// Dependencies modules
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import expressLayouts from 'express-ejs-layouts';
import sequelize from './config/database.js';

dotenv.config();

// import from lib
// import { getFortune } from './lib/fortune.js';

// Variables
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Static Files
app.use(express.static('app/public'));

// Setup view engine
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(expressLayouts);
app.set('layout', './layouts/application');

app.use(bodyParser.urlencoded({ extended: true }));

// Home page
app.get('/', (req, res) => {
  res.render('index', { title: 'Node Project Starter Template' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page', layout: './layouts/sidebar' });
});

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server started and listening on http://localhost:${port} ` +
          '\nPress ctrl+C to terminate'
      );
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
