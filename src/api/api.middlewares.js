import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import CustomError from './api.errors.js';

export const validator = (schemas) => {
  return async (req, res, next) => {
    try {
      await Promise.all(schemas.map((schema) => schema.run(req)));
      const result = validationResult(req);
      if (result.isEmpty()) return next();
      const { errors } = result;
      throw new CustomError.ValidationError('Validation errors within your requests!', errors);
    } catch (err) {
      next(err);
    }
  };
};

export function httpApiResponses(req, res, next) {
  const response = (
    { success = false, message = '', cache = false, error = [], data = [] } = {},
    statusCode,
  ) => {
    return res.status(statusCode).json({
      success,
      statusCode,
      message,
      requestUrl: req.originalUrl,
      cache,
      query: req.query,
      params: req.params,
      body: req.body,
      error,
      data,
    });
  };

  res.success = function (args) {
    return response(
      { success: true, message: 'The request was successful!', ...args },
      StatusCodes.OK,
    );
  };

  next();
}
