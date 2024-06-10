import { config } from 'dotenv';
import { dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Load environment variables from .env file in the root directory
// config({ path: '../../.env' });
config({ path: new URL('./.env', import.meta.url).pathname });

console.log('PORT:', process.env.PORT);
console.log('STATIC_DIR:', process.env.STATIC_DIR);

// Resolve __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const cfg = {
  port: process.env.PORT || 3000,
  dir: {
    root: __dirname,
    static: `${__dirname}${sep}${process.env.STATIC_DIR}${sep}`,
    public: `${__dirname}${sep}${process.env.PUBLIC_DIR}${sep}`,
    views: `${__dirname}${sep}${process.env.VIEWS_DIR}${sep}`,
  },
};

export default cfg;
