import { Request, Response, NextFunction, RequestHandler } from "express";

const asyncFunc = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err));
  };
};
export default asyncFunc;
