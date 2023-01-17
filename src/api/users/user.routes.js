import express from 'express';
const user = express.Router();

import * as userControllers from './user.controllers.js';

user.get('/', userControllers.getUsers);

export default user;
