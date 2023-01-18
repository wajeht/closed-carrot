import { body } from 'express-validator';

export const postUser = [
  body('username').trim().notEmpty().withMessage('The username must not be empty!').bail(),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('The email must not be empty!')
    .bail()
    .isEmail()
    .withMessage('The email must be an email!')
    .bail(),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password must not be empty!')
    .bail()
    .isLength({ min: 10, max: 100 })
    .withMessage('Password must be at least 10 character long or less than 100 character long')
    .bail(),
];
