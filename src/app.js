import path from 'path';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';

import swaggerConfig from './config/swagger.config.js';
import * as appMiddlewares from './app.middlewares.js';
import * as apiMiddlewares from './api/api.middlewares.js';
import apiRoutes from './api/api.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(process.cwd(), 'public'))));

expressJSDocSwagger(app)(swaggerConfig);

app.use(apiMiddlewares.httpApiResponses);
app.use('/api', apiRoutes);
app.use('*', appMiddlewares.reactHandler);
app.use(appMiddlewares.notFoundApiHandler);
app.use(appMiddlewares.errorApiHandler);

export default app;
