import express from 'express';
const api = express.Router();

import v1Routes from './v1/v1.js';

api.use('/v1', v1Routes);

export default api;
