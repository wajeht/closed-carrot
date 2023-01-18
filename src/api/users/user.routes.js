import { validator } from '../api.middlewares.js';
import express from 'express';
const user = express.Router();

import * as userControllers from './user.controllers.js';
import * as userValidators from './user.validators.js';

/**
 * GET /api/users
 * @tags users
 * @summary get list of users
 * @security BearerAuth
 */
user.get('/', userControllers.getUsers);

/**
 * POST /api/users
 * @tags users
 * @summary add a user
 * @param {string} email.form.required - the email - application/x-www-form-urlencoded
 * @param {string} password.form.required - the password - application/x-www-form-urlencoded
 * @param {string} username.form.required - the username - application/x-www-form-urlencoded
 * @security BearerAuth
 */
user.post('/', validator(userValidators.postUser), userControllers.postUser);

export default user;
