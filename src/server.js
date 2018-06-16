/*
 * Package Import
 */
import config from 'config';
import debug from 'debug-oclock';

/*
 * Local Import
 */
import app from './index';
import database from './database';

/*
 * Init
 */

// Debug
const Debug = debug('base');

// Node.js
const { port } = config.get('Server');

/*
 * Server • Node.js
 */
const server = app.listen(port, () => {
  Debug('🤖  Node.js is running :');
  Debug(`→ PORT *:${port}`);
  Debug(`→ ENV : ${process.env.NODE_ENV}`);
});

/*
 * Database • Mongoose
 */
database();

/*
 * Export
 */
export default server;
