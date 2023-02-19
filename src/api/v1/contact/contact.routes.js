import { validator } from '../../api.middlewares.js';
import catchAsyncHandler from 'express-async-handler';

import express from 'express';
const contact = express.Router();

import * as contactControllers from './contact.controllers.js';
import * as contactValidators from './contact.validators.js';

/**
 * POST /api/v1/contact
 * @tags contact
 * @summary create a contact
 * @param {string} email.form.required - the email - application/x-www-form-urlencoded
 * @param {string} subject.form.required - the subject - application/x-www-form-urlencoded
 * @param {string} message.form.required - the message - application/x-www-form-urlencoded
 */
contact.post(
  '/',
  validator(contactValidators.postContact),
  catchAsyncHandler(contactControllers.postContact),
);

export default contact;
