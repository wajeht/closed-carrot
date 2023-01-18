import express from 'express';
const api = express.Router();

import userRoutes from './users/user.routes.js';
import authRoutes from './auth/auth.routes.js';

api.use('/users', userRoutes);
api.use('/auth', authRoutes);

export default api;
