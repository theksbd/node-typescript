import express, { Express, Request, Response } from 'express';
import appRoute from './routes/appRoute';

const app: Express = express();

app.use('/api', appRoute);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello World!!!' });
});

app.listen(5000, (): void => {
  console.log('Server is listening on port 5000');
});
