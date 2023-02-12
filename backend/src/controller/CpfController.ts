import { Request, Response } from 'express';
import CpfService from '../service/CpfService';

export default class CpfController {
	private service = new CpfService();

	public add = async (req: Request, res: Response) => {
		const { cpf } = req.body;
		//verifica se o CPF foi adicionado
		const isAdded = await this.service.add(+cpf);
		//caso tenha sido, retorna http status 201
		if (typeof isAdded === 'number') return res.status(201).json();
		//caso não, retorna http status 409 e mensagem padrão de exceção indicada pelo PO
		return res
			.status(409)
			.json({ type: 'ExistsCpfException', message: 'CPF alerady exists' });
	};

	public findOne = async (req: Request, res: Response) => {
		const { cpf } = req.params;
		//verifica se o CPF foi encontrado
		const isFound = await this.service.findOne(+cpf);
		//caso tenha sido, retorna http status 200 e o JSON CPF
		if (!isFound.type) return res.status(200).json(isFound);
		//caso não, retorna http status 404 e mensagem padrão de exceção indicada pelo PO
		return res.status(404).json(isFound);
	};

	public remove = async (req: Request, res: Response) => {
		const { cpf } = req.params;
		//verifica se o CPF foi removido
		const isRemoved = await this.service.remove(+cpf);
		//caso não, retorna http status 404 e mensagem padrão de exceção indicada pelo PO
		if (typeof isRemoved !== 'number') return res.status(404).json(isRemoved);
		//caso tenha sido, retorna http status 200
		return res.status(200).json();
	};

	public findAll = async (req: Request, res: Response) => {
		const cpfs = await this.service.findAll();
		//retorna a lista de CPFs ([] caso não exista nenhum)
		return res.status(200).json(cpfs);
	};
}
