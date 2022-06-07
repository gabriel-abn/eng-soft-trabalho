import { Atletica } from "../../domain/Atletica";
import { IAtleticaRepository } from "../repositories/AtleticaRepository";

type CreateAtleticaSubmissionDTO = {
  id: string;
  nome: string;
  cnpj: string;
  faculdade: string;
  cidade: string;
};

export class CreateAtleticaSubmissionUseCase {
  constructor(private readonly atleticaRepo: IAtleticaRepository) {}

  async execute(props: CreateAtleticaSubmissionDTO) {
    const atletica = Atletica.create(props);
    atletica.props.confirmacao = false;

    const response = await this.atleticaRepo.insert(atletica).then((res) => {
      return res;
    });

    return response;
  }
}
