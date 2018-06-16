/*
 * Package Import
 */
import express from 'express';
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';
import config from 'config';
import helmet from 'helmet';
import cors from 'cors';
import errorHandler from 'errorhandler';
import morgan from 'morgan';
import i18n from 'i18n';
import path from 'path';

/*
 * Local Import
 */
import routes from './routes';

/*
 * Init
 */

// Express
const app = express();

// Static Files
const publicPath = config.get('Path.public');

// i18n
// API : https://github.com/mashpie/i18n-node
i18n.configure({
  locales: ['fr', 'en'],
  defaultLocale: 'en',
  directory: path.join(__dirname, 'datas/i18n/locales'),
});

/*
 * Middlewares
 */

// Security
// Please see : http://expressjs.com/en/advanced/best-practice-security.html

// Helmet is actually just a collection of nine smaller middleware
// functions that set security-related HTTP headers:
app.use(helmet());

// Disable the X-Powered-By header.
// Attackers can use this header to detect apps running Express
// And then launch specifically-targeted attacks
app.disable('x-powered-by');

// Static Files
app.use(
  serveStatic(publicPath, {
    index: false,
    maxAge: '30d',
  }),
);

// BodyParser
app.use(bodyParser.json());

// CORS
// API : https://github.com/expressjs/cors#configuration-options
app.use(cors());

// Logger
// API : https://github.com/expressjs/morgan
// `dev` is equal to `:method :url :status :response-time ms`
if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

/*
 * Routes
 */
routes(app);

/*
 * Error Handling
 */
// error handling middleware should be
// loaded after the loading the routes
// API : https://github.com/expressjs/errorhandler
if (app.get('env') === 'development') {
  app.use(errorHandler());
}

/*
 * Export
 */
export default app;
