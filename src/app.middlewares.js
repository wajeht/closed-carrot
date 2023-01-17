import path from 'path';

/**
 * It takes the request, response, and next objects, and then sends the index.html file to the client
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that will be called if an error occurs.
 * @returns The index.html file from the public folder.
 */
export function reactHandler(req, res, next) {
  try {
    return res.sendFile(path.resolve(path.join(process.cwd(), 'public', 'index.html')));
  } catch (e) {
    next(e);
  }
}

/**
 * If the request URL contains the string `/api/`, then return a JSON response with a 400 status code. Otherwise, call the next middleware function
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a callback function that will be called when the middleware is done.
 * @returns A function that takes in three parameters: req, res, and next.
 */
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

/**
 * If the request URL contains the string "/api/", then return a JSON response with a 500 status code. Otherwise, call the next middleware function
 * @param err - The error object
 * @param req - The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to pass control to the next middleware function in the chain.
 * @returns a function.
 */
export function errorApiHandler(err, req, res, next) {
  const isApiPrefix = req.url.match(/\/api\//g);
  if (isApiPrefix) {
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
