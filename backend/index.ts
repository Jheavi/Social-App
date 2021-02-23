import express from 'express';
import newRouter from './src/routes/chatRouter';

const app = express();
const port = 2130;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', newRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
