import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello World!!!' });
});

app.listen(5000, (): void => {
  console.log('Server is listening on port 5000');
});
