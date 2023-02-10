import { RowDataPacket } from 'mysql2';

export interface IModel {
	add(cpf: number): Promise<number>;
	findOne(cpf: number): Promise<RowDataPacket>;
	remove(cpf: number): Promise<number>;
	findAll(): Promise<RowDataPacket[]>;
}
