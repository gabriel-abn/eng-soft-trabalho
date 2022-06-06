import { Membro } from "../../domain/Membro";
import { IMembroRepository } from "../repositories/MembroRepository";

type CreateMembroUseCaseDTO = {
  id: string;
  rg: string;
  nome: string;
  atleticaCnpj: string;
};
export class CreateMembroUseCase {
  constructor(private readonly membroRepo: IMembroRepository) {}

  async execute(membro: CreateMembroUseCaseDTO, _id?: string) {
    const insertMembro = Membro.create({ ...membro }, _id);

    const res = await this.membroRepo
      .insert(insertMembro)
      .then((membroRes) => {
        return membroRes;
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });

    return res;
  }
}
