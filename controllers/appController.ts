import { Request, RequestHandler, Response } from 'express';

export const getDogs: RequestHandler = (req: Request, res: Response) => {
  res.status(200).json({ message: 'All dogs!' });
};

export const getCats: RequestHandler = (req: Request, res: Response) => {
  res.status(200).json({ message: 'All cats!' });
};
