import { Membro } from "../../domain/Membro";
import { MembroRepository } from "../repositories/MembroRepository";

type CreateMembroUseCaseDTO = {
  id: string;
  nome: string;
  atletica: string;
};
export class CreateMembroUseCase {
  constructor(private readonly membroRepo: MembroRepository) {}

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
