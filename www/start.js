import app from '../app/server.js';

import dotenv from 'dotenv';
dotenv.config();

// Variables
const port = process.env.PORT || 8200;

// start.js

app.listen(port, () => {
  console.log(
    `Server started and running on port ${port}` +
      '\nPress ctrl+C to terminate' +
      '\n-----------------------------------------'
  );
});
