import { Request, Response, NextFunction } from 'express';
/**
 * Custom error handler to standardize error objects returned to
 * the client
 *
 * @param err Error caught by Express.js
 * @param _req Request object provided by Express
 * @param res Response object provided by Express
 * @param _next NextFunction function provided by Express
 */
function handleError(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  
  console.log("ERROR: "+err.message);
  
  if (err.status === 500 || !err.message) {
    res.sendFile('500.html', {root: "public"});
  } else if (err.status === 400) {
    res.json( { message: "Bad Request"});
  }
  else if (err.status === 409) {
    res.json( { message: "Conflict"});
  }
  else if (err.status === 406) {
    res.json( { message: "The request is not acceptable"});
  }
  else if (err.status === 401) {
    res.sendFile('401.html', {root: "public"});
  }
  else if (err.status === 404) {
    res.sendFile('404.html', {root: "public"});
  }
};

export default handleError;