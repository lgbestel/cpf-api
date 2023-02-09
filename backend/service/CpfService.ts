import CpfModel from '../model/CpfModel';

export default class CpfService {
  private model = new CpfModel()

  public add = async (cpf: number) => {
    const { type } = await this.findOne(cpf);
    if (type === 'SUCCES') return { type: 'ExistsCpfException', message: 'CPF already exists'}
    return await this.model.add(cpf);
  }

  public findOne = async(cpf: number) => {
    const foundCpf = await this.model.findOne(cpf);
    if (!foundCpf) return { type: 'NotFoundCpfException', message: 'CPF not found' };
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