import { Request, Response, NextFunction } from 'express';

export default class CpfValidation {
	validateLength = async (req: Request, res: Response, next: NextFunction) => {
		const cpf = req.params.cpf || req.body.cpf;
		if (cpf.length !== 11) {
			return res
				.status(406)
				.json({ type: 'InvalidException', message: 'CPF is not valid.' });
		}
		return next();
	};

	validateDigits = async (req: Request, res: Response, next: NextFunction) => {
		const cpf = req.params.cpf || req.body.cpf;
		const cpfDigits = cpf.split('');
		const summedCpfDigits = cpfDigits
			.map((num: string) => Number(num))
			.reduce((acc: number, curr: number) => acc + curr);
		if (summedCpfDigits / 11 === Number(cpfDigits[0])) {
			return res
				.status(406)
				.json({ type: 'InvalidException', message: 'CPF is not valid.' });
		}
		return next();
	};
}
