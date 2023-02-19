import userRoutes from './users/user.routes.js';
import authRoutes from './auth/auth.routes.js';
import contactRoutes from './contact/contact.routes.js';
import express from 'express';

const v1 = express.Router();

v1.use('/users', userRoutes);
v1.use('/auth', authRoutes);
v1.use('/contact', contactRoutes);

export default v1;
