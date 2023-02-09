import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

export default class CpfModel {
  public add = async(cpf: number): Promise<number> => {
    const query = 'INSERT INTO Cpf.cpfList (cpf) VALUES (?);'
    const values = [cpf];
    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, values);
    return insertId;
  };

  public findOne = async(cpf: number): Promise<RowDataPacket> => {
    const query = 'SELECT * FROM Cpf.cpfList WHERE cpf = ?;'
    const values = [cpf];
    const [[foundCpf]] = await connection.execute<RowDataPacket[]>(query, values);
    return foundCpf;
  }

  public remove = async(cpf: number): Promise<number> => {
    const query = 'DELETE FROM Cpf.cpfList WHERE cpf = ?;'
    const [{ affectedRows }] = await connection.execute<ResultSetHeader>(query, [cpf]);
    return affectedRows;
  }

  public findAll = async () => {
    const query = 'SELECT * FROM Cpf.cpfListoId;'
    const [cpfs] = await connection.execute<RowDataPacket[]>(query);
    return cpfs;
  }
}