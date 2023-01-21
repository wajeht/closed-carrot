import { validator } from '../../api.middlewares.js';
import catchAsyncHandler from 'express-async-handler';

import * as authControllers from './auth.controllers.js';
import * as authValidators from './auth.validators.js';

import express from 'express';
const auth = express.Router();

auth.post(
  '/register',
  validator(authValidators.postRegister),
  catchAsyncHandler(authControllers.postRegister),
);

auth.post(
  '/login',
  validator(authValidators.postLogin),
  catchAsyncHandler(authControllers.postLogin),
);

auth.post(
  '/forgot-password',
  validator(authValidators.postForgotPassword),
  catchAsyncHandler(authControllers.postForgotPassword),
);

auth.post(
  '/reset-password',
  validator(authValidators.postRegister),
  catchAsyncHandler(authControllers.postRegister),
);

auth.get(
  '/verify-email',
  validator(authValidators.getVerifyEmail),
  catchAsyncHandler(authControllers.getVerifyEmail),
);

export default auth;
