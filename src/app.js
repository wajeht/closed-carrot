import path from 'path';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import Sentry from '@sentry/node';

// adminjs
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import MongooseAdapter from '@adminjs/mongoose';

// models
import User from './api/v1/users/user.model.js';
import Contact from './api/v1/contact/contact.model.js';

import apiRoutes from './api/api.routes.js';
import swaggerConfig from './config/swagger.config.js';

import * as appMiddlewares from './app.middlewares.js';
import * as apiMiddlewares from './api/api.middlewares.js';
import * as rateLimiters from './config/rate-limiters.config.js';

import { ENV_ENUM } from './utils/enums.js';
import { ENV, SENTRY_URL } from './config/constants.js';

const app = express();

Sentry.init({ dsn: SENTRY_URL });
app.use(Sentry.Handlers.requestHandler());

// TODO!: only available on dev. add authentication for prod!
if (ENV === ENV_ENUM.DEVELOPMENT) {
  AdminJS.registerAdapter(MongooseAdapter);

  const admin = new AdminJS({
    resources: [User, Contact],
    rootPath: '/admin',
  });

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);
}

// TODO!: disable this for prod!
app.set('trust proxy', 1);
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }),
);
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(process.cwd(), 'public'))));

// app.get('/debug-sentry', (req, res) => {
//   throw new Error('My first Sentry error!');
// });

app.use(apiMiddlewares.httpApiResponses);

expressJSDocSwagger(app)(swaggerConfig);

if (ENV === ENV_ENUM.PRODUCTION) {
  app.use('/api', rateLimiters.api, apiRoutes);
  app.get('/api/health', rateLimiters.api, appMiddlewares.healthCheck);
  app.use('*', rateLimiters.app, appMiddlewares.reactHandler);
} else {
  app.use('/api', apiRoutes);
  app.get('/api/health', appMiddlewares.healthCheck);
  app.use('*', appMiddlewares.reactHandler);
}

app.use(Sentry.Handlers.errorHandler());
app.use(appMiddlewares.notFoundApiHandler);
app.use(appMiddlewares.errorApiHandler);

export default app;
