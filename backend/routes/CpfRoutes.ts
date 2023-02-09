import { Router } from 'express';
import CpfValidation from '../middlewares/CpfValidation';

import CpfController from '../controller/CpfController';
const cpfController = new CpfController();
const cpfValidation = new CpfValidation();

const cpfRouter = Router();

cpfRouter.get('/', cpfController.findAll);
cpfRouter.get('/:cpf', cpfValidation.validateLength, cpfValidation.validateDigits, cpfController.findOne);
cpfRouter.post('/', cpfValidation.validateLength, cpfValidation.validateDigits, cpfController.add);
cpfRouter.delete('/:cpf', cpfValidation.validateLength, cpfValidation.validateDigits, cpfController.remove);

export default cpfRouter;