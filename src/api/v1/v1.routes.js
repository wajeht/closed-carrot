import userRoutes from './users/user.routes.js';
import authRoutes from './auth/auth.routes.js';
import express from 'express';

const v1 = express.Router();

v1.use('/users', userRoutes);
v1.use('/auth', authRoutes);

export default v1;
