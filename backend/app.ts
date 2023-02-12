import * as express from 'express';
import cpfRouter from './src/routes/CpfRoutes';

const app = express();

app.use(express.json());
app.use('/cpf', cpfRouter);

export default app;
