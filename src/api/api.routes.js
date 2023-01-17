import express from 'express';
const api = express.Router();

import userRoutes from './users/user.routes.js';

api.use('/users', userRoutes);

export default api;
