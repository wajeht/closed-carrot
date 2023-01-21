import express from 'express';
const v1 = express.Router();

import userRoutes from './users/user.routes.js';
import authRoutes from './auth/auth.routes.js';

v1.use('/users', userRoutes);
v1.use('/auth', authRoutes);

export default v1;
