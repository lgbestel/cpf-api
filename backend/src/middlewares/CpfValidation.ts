import { Request, Response, NextFunction } from 'express';

export default class CpfValidation {
	validateLength = async (req: Request, res: Response, next: NextFunction) => {
		const cpf = req.params.cpf || req.body.cpf;
		//verifica se o cpf tem 11 digitos
		if (cpf.length !== 11) {
			//se não, retorna status 406 e mensagem padrão de exceção indicada pelo PO
			return res
				.status(406)
				.json({ type: 'InvalidException', message: 'CPF is not valid.' });
		}
		//se sim, segue para a próxima validação ou rota indicada
		return next();
	};

	validateDigits = async (req: Request, res: Response, next: NextFunction) => {
		const cpf = req.params.cpf || req.body.cpf;
		//divide o cpf em digitos individuais
		const cpfDigits = cpf.split('');
		//converte os digitos para numero e então faz a soma de todos eles
		const summedCpfDigits = cpfDigits
			.map((num: string) => Number(num))
			.reduce((acc: number, curr: number) => acc + curr);
		//caso a média de todos os dígitos seja exatamente igual ao primeiro e segundo dígitos,
		//significa que todos os dígitos são iguais
		if (
			summedCpfDigits / 11 === Number(cpfDigits[0]) &&
			summedCpfDigits / 11 === Number(cpfDigits[1])
		) {
			//se todos os dígitos são iguais, retorna http status 406 mensagem padrão de exceção indicada pelo PO
			return res
				.status(406)
				.json({ type: 'InvalidException', message: 'CPF is not valid.' });
		}
		//se não, segue para a próxima validação ou rota indicada
		return next();
	};
}
