import express from 'express';
const user = express.Router();

import * as userControllers from './user.controllers.js';

/**
 * GET /api/users
 * @tags users
 * @summary get list of users
 * @security BearerAuth
 */
user.get('/', userControllers.getUsers);

export default user;
