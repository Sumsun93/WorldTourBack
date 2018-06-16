/*
 * Package Import
 */
import express from 'express';
import config from 'config';

/*
 * Local Import
 */

/*
 * Init
 */
const apiRoutes = express.Router();

// Frontend Files.
const indexPath = config.get('Path.index');

/*
 * Routes
 */
export default (app) => {
  /*
   * Basic Routes
   */
  app.get('/', (req, res) => {
    res.sendFile(indexPath);
  });

  /*
   * Api Routes
   */
  // Set '/api' for apiRoutes
  app.use('/api', apiRoutes);
};
