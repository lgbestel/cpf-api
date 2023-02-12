import { RowDataPacket } from 'mysql2';
import IExceptionOutput from '../interfaces/IExceptionOutput';
import CpfModel from '../model/CpfModel';

export default class CpfService {
	private model = new CpfModel();

	public add = async (cpf: number): Promise<number | IExceptionOutput> => {
		//verifica se o CPF existe
		const isFound = await this.findOne(cpf);
		if (!isFound.type)
			//se já existe, retorna exceção
			return { type: 'ExistsCpfException', message: 'CPF already exists' };
		//se não existe, adiciona à lista
		return await this.model.add(cpf);
	};

	public findOne = async (
		cpf: number
	): Promise<RowDataPacket | IExceptionOutput> => {
		//verifica se o CPF existe
		const foundCpf = await this.model.findOne(cpf);
		if (!foundCpf)
			//se não existe, retorna exceção
			return { type: 'NotFoundCpfException', message: 'CPF not found' };
		//se existe, retorna o JSON com os dados do CPF
		return foundCpf;
	};

	public remove = async (cpf: number): Promise<number | IExceptionOutput> => {
		const affectedRows = await this.model.remove(cpf);
		//verifica se o CPF foi removido
		if (affectedRows === 0)
			//se não foi removido, retorna exceção
			return { type: 'NotFoundCpfException', message: 'CPF not found' };
		//se foi removido, retorna o número de linhas alteradas
		return affectedRows;
	};

	public findAll = async (): Promise<RowDataPacket[]> => {
		const cpfs = await this.model.findAll();
		return cpfs;
	};
}
