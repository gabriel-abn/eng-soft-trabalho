import { Atletica } from "../../domain/Atletica";
import { AtleticaRepository } from "../repositories/AtleticaRepository";

type CreateAtleticaSubmissionDTO = {
  id: string;
  nome: string;
  cnpj: string;
  faculdade: string;
  cidade: string;
};

export class CreateAtleticaSubmissionUseCase {
  constructor(private readonly atleticaRepo: AtleticaRepository) {}

  async execute(props: CreateAtleticaSubmissionDTO) {
    const atletica = Atletica.create(props);

    const response = await this.atleticaRepo
      .insert(atletica)
      .then((res) => {
        return res;
      })
      .catch((error: Error) => {
        console.log(error.message);
        return error;
      });

    return response;
  }
}
