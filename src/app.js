import path from 'path';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import express from 'express';

import * as appRoutes from './app.routes.js';
import apiRoutes from './api/api.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(process.cwd(), 'public'))));

app.use('/api', apiRoutes);
app.use(appRoutes.notFoundApiHandler);
app.use(appRoutes.errorApiHandler);
app.use('*', appRoutes.reactHandler);

export default app;
