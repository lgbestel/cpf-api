import { Router } from 'express';

import CpfController from '../controller/CpfController';
const cpfController = new CpfController();

const cpfRouter = Router();

cpfRouter.post('/', cpfController.add);
cpfRouter.get('/:cpf', cpfController.findOne);
cpfRouter.delete('/:cpf', cpfController.remove);
cpfRouter.get('/', cpfController.findAll);

export default cpfRouter;