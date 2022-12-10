import { Request, Response, NextFunction } from 'express';

function handleError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).send();
};

export default handleError; 