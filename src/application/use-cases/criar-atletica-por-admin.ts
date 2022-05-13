import { Atletica } from "../../domain/Atletica";
import { IAtleticaRepository } from "../repositories/AtleticaRepository";

type CreateAtleticaByAdminDTO = {
  id: string;
  nome: string;
  cnpj: string;
  faculdade: string;
  cidade: string;
  confirmacao?: number;
};

export class CreateAtleticaByAdminUseCase {
  constructor(private readonly atleticaRepo: IAtleticaRepository) {}

  async execute(props: CreateAtleticaByAdminDTO) {
    const atletica = Atletica.create(props);
    atletica.setConfirmationTrue();

    const response = await this.atleticaRepo
      .insert(atletica)
      .then((res) => {
        return res;
      })
      .catch((err: Error) => {
        return new Error(err.message);
      });

    return response;
  }
}
