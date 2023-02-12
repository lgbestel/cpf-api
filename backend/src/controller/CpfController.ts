import { Request, Response } from 'express';
import CpfService from '../service/CpfService';

export default class CpfController {
	private service = new CpfService();

	public add = async (req: Request, res: Response) => {
		const { cpf } = req.body;
		const isAdded = await this.service.add(+cpf);
		if (typeof isAdded === 'number') return res.status(201).json();
		return res
			.status(409)
			.json({ type: 'ExistsCpfException', message: 'CPF alerady exists' });
	};

	public findOne = async (req: Request, res: Response) => {
		const { cpf } = req.params;
		const isFound = await this.service.findOne(+cpf);
		if (!isFound.type) return res.status(200).json(isFound);
		return res.status(404).json(isFound);
	};

	public remove = async (req: Request, res: Response) => {
		const { cpf } = req.params;
		const isRemoved = await this.service.remove(+cpf);
		if (typeof isRemoved !== 'number') return res.status(404).json(isRemoved);
		return res.status(200).json();
	};

	public findAll = async (req: Request, res: Response) => {
		const cpfs = await this.service.findAll();
		return res.status(200).json(cpfs);
	};
}
