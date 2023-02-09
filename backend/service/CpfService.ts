import CpfModel from '../model/CpfModel';

export default class CpfService {
  private model = new CpfModel()

  public add = async (cpf: number) => {
    await this.model.add(cpf);
  }

  public findOne = async(cpf: number) => {
    const foundCpf = await this.model.findOne(cpf);
    if (!foundCpf) return { type: 'ERROR', message: 'CPF not found' };
    return { type: 'SUCCESS', message: foundCpf };
  }

  public remove = async(cpf: number): Promise<number> => {
    const affectedRows = await this.model.remove(cpf);
    return affectedRows;
  }

  public findAll = async () => {
    const cpfs = await this.model.findAll();
    return cpfs;
  }
}