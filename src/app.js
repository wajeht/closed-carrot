import path from 'path';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';

import apiRoutes from './api/api.routes.js';
import swaggerConfig from './config/swagger.config.js';

import * as appMiddlewares from './app.middlewares.js';
import * as apiMiddlewares from './api/api.middlewares.js';
import * as rateLimiters from './config/rate-limiters.config.js';

import { ENV_ENUM } from './utils/enums.js';
import { ENV } from './config/constants.js';

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        frameSrc: ['https://*.google.com'],
      },
    },
  }),
);
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(process.cwd(), 'public'))));

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

app.use(appMiddlewares.notFoundApiHandler);
app.use(appMiddlewares.errorApiHandler);

export default app;
