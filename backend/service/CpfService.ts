import { RowDataPacket } from 'mysql2';
import IExceptionOutput from '../interfaces/IExceptionOutput';
import CpfModel from '../model/CpfModel';

export default class CpfService {
  private model = new CpfModel()

  public add = async (cpf: number): Promise<number | IExceptionOutput > => {
    const isFound = await this.findOne(cpf);
    if (!isFound.type) return { type: 'ExistsCpfException', message: 'CPF already exists'}
    return await this.model.add(cpf);
  }

  public findOne = async(cpf: number): Promise<RowDataPacket | IExceptionOutput> => {
    const foundCpf = await this.model.findOne(cpf);
    if (!foundCpf) return { type: 'NotFoundCpfException', message: 'CPF not found' };
    return foundCpf;
  }

  public remove = async(cpf: number): Promise<number | IExceptionOutput> => {
    const affectedRows = await this.model.remove(cpf);
    if (affectedRows === 0) return { type: 'NotFoundCpfException', message: 'CPF not found' }
    return affectedRows;
  }

  public findAll = async (): Promise<RowDataPacket[]> => {
    const cpfs = await this.model.findAll();
    return cpfs;
  }
}