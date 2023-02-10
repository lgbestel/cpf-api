import { IModel } from '../interfaces/IModel';
import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

export default class CpfModel implements IModel {
	public async add(cpf: number): Promise<number> {
		const query = 'INSERT INTO Cpf.cpfList (cpf) VALUES (?);';
		const values = [cpf];
		const [{ insertId }] = await connection.execute<ResultSetHeader>(
			query,
			values
		);
		return insertId;
	}

	public async findOne(cpf: number): Promise<RowDataPacket> {
		const query = 'SELECT * FROM Cpf.cpfList WHERE cpf = ?;';
		const values = [cpf];
		const [[foundCpf]] = await connection.execute<RowDataPacket[]>(
			query,
			values
		);
		return foundCpf;
	}

	public async remove(cpf: number): Promise<number> {
		const query = 'DELETE FROM Cpf.cpfList WHERE cpf = ?;';
		const values = [cpf];
		const [{ affectedRows }] = await connection.execute<ResultSetHeader>(
			query,
			values
		);
		return affectedRows;
	}

	public async findAll(): Promise<RowDataPacket[]> {
		const query = 'SELECT * FROM Cpf.cpfList;';
		const [cpfs] = await connection.execute<RowDataPacket[]>(query);
		return cpfs;
	}
}
