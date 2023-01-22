import { validator } from '../../api.middlewares.js';
import catchAsyncHandler from 'express-async-handler';

import * as authControllers from './auth.controllers.js';
import * as authValidators from './auth.validators.js';

import express from 'express';
const auth = express.Router();

/**
 * POST /api/v1/auth/register
 * @tags auth
 * @summary register for an account
 * @security BearerAuth
 */
auth.post(
  '/register',
  validator(authValidators.postRegister),
  catchAsyncHandler(authControllers.postRegister),
);

/**
 * POST /api/v1/auth/login
 * @tags auth
 * @summary login to an account
 * @security BearerAuth
 */
auth.post(
  '/login',
  validator(authValidators.postLogin),
  catchAsyncHandler(authControllers.postLogin),
);

/**
 * POST /api/v1/auth/forgot-password
 * @tags auth
 * @summary request forgot password
 * @security BearerAuth
 */
auth.post(
  '/forgot-password',
  validator(authValidators.postForgotPassword),
  catchAsyncHandler(authControllers.postForgotPassword),
);

/**
 * POST /api/v1/auth/reset-password
 * @tags auth
 * @summary reset password
 * @security BearerAuth
 */
auth.post(
  '/reset-password',
  validator(authValidators.postRegister),
  catchAsyncHandler(authControllers.postRegister),
);

/**
 * GET /api/v1/auth/verify-email
 * @tags auth
 * @summary verify email
 * @security BearerAuth
 */
auth.get(
  '/verify-email',
  validator(authValidators.getVerifyEmail),
  catchAsyncHandler(authControllers.getVerifyEmail),
);

export default auth;
