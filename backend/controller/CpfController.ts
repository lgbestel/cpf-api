import { Request, Response } from 'express';
import CpfService from '../service/CpfService';

export default class CpfController {
  private service = new CpfService();

  public add = async (req: Request, res: Response) => {
    const { cpf } = req.body;
    await this.service.add(+cpf);
    return res.status(200).json();
  }

  public findOne = async(req: Request, res: Response) => {
    const { cpf } = req.params;
    const cpfMessage = await this.service.findOne(+cpf);
    if (cpfMessage.type === 'SUCCESS') return res.status(201).json(cpfMessage.message);
    return res.status(404).json(cpfMessage);
  }

  public remove = async(req: Request, res: Response) => {
    const { cpf } = req.params;
    const affectedRows = await this.service.remove(+cpf);
    return res.status(200).json();
  }

  public findAll = async (req: Request, res: Response) => {
    const cpfs = await this.service.findAll();
    return res.status(200).json();
  }
}