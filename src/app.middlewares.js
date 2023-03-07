import path from 'path';
import CustomError from './api/api.errors.js';
import { ENV } from './config/constants.js';
import { ENV_ENUM } from './utils/enums.js';
import Discord from './utils/discord.js';

export function reactHandler(req, res, next) {
  try {
    return res.sendFile(path.resolve(path.join(process.cwd(), 'public', 'index.html')));
  } catch (e) {
    next(e);
  }
}

export function healthCheck(req, res) {
  return res.status(200).json({
    message: 'ok',
    date: new Date(),
  });
}

export function notFoundApiHandler(req, res, next) {
  const isApiPrefix = req.url.match(/\/api\//g);
  if (isApiPrefix) {
    return res.status(400).json({
      success: false,
      requestUrl: req.originalUrl,
      message: 'The resource requested could not be found on this server!',
    });
  } else {
    next();
  }
}

export async function errorApiHandler(err, req, res, next) {
  await Discord.send({
    message: err.message,
    object: err.stack,
  });

  const isApiPrefix = req.url.match(/\/api\//g);
  if (isApiPrefix) {
    console.error(err);
    if (err instanceof CustomError.ValidationError) {
      return res.status(err.statusCode).json({
        success: false,
        request_url: req.originalUrl,
        errors: err?.errors,
        message: ENV === ENV_ENUM.DEVELOPMENT ? err.stack : err.message,
        data: null,
      });
    }
    return res.status(500).json({
      success: false,
      requestUrl: req.originalUrl,
      message:
        'The server encountered an internal error or misconfiguration and was unable to complete your request.',
    });
  } else {
    next();
  }
}
