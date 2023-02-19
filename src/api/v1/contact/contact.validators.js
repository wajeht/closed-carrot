import { body } from 'express-validator';

export const postContact = [
  body('email')
    .notEmpty()
    .withMessage('email must not be empty!')
    .trim()
    .isEmail()
    .withMessage('email value must be an email!'),
  body('subject')
    .notEmpty()
    .withMessage('subject must not be empty!')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('subject must be at least 1 character long or less than 200 character long'),
  body('message')
    .notEmpty()
    .withMessage('message must not be empty!')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('message must be at least 1 character long or less than 500 character long'),
];
