import v1Routes from './v1/v1.routes.js';
import express from 'express';

const api = express.Router();

api.use('/v1', v1Routes);

export default api;
