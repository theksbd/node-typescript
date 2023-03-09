import { Router, Request, Response } from 'express';
import { getDogs, getCats } from '../controllers/appController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World from appRouter!' });
});

router.get('/dogs', getDogs);
router.get('/cats', getCats);

export default router;
