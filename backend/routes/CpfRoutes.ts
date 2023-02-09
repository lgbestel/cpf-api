import { Router } from 'express';

import CpfController from '../controller/CpfController';
const cpfController = new CpfController();

const cpfRouter = Router();

cpfRouter.post('/', cpfController.add);
cpfRouter.get('/:cpf', cpfController.findOne);

export default cpfRouter;