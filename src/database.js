/*
 * Package Import
 */
import config from 'config';
import mongoose from 'mongoose';
import debug from 'debug-oclock';

/*
 * Local Import
 */

/*
 * Init
 */
const Debug = debug('base');

// Tell Mongoose to use ES6 promises
mongoose.Promise = global.Promise;
const database = mongoose.connection;
const { uri, options } = config.get('Database');

/*
 * Database Mongoose
 */
const connectDatabase = () => {
  mongoose.connect(uri, options).catch((error) => {
    Debug('🚫  Impossible to connect at the Database.');
    if (
      error.message &&
      error.message.match(/failed to connect to server .* on first connect/)
    ) {
      Debug(`🚫  Error: ${error}`);
      Debug('👀  Please check if your MongoDB is correctly connected');
      Debug('Retrying first connect in 30 seconds');

      // Wait for a bit,
      setTimeout(() => {
        // then try to connect again
        Debug('Retrying first connect...');
        mongoose.connect(uri, options).catch(() => {});
      }, 30000);
    }
    else {
      // Some other error occurred
      // Log it
      Debug(`🚫  Error: ${error}`);
    }
  });

  // Event : {Open}
  database.once('open', () => {
    Debug('🤖  MongoDB is running :');
    Debug(`→ URI ${uri}`);
  });

  // Event : {Disconnected}
  database.on('disconnected', () => {
    // Suggestion : Envoyez un mail quand MongoDB se deconnecte ?
    Debug('⚠️  MongoDB is stopped');
  });

  // Event : {Reconnected}
  database.on('reconnected', () => {
    Debug('reconnected');
  });
};

/*
 * Export
 */
export default connectDatabase;
