import { Atletica } from "../../domain/Atletica";
import { Modalidade } from "../../domain/Modalidade";
import { IAtleticaRepository } from "../repositories/AtleticaRepository";
import { IModalidadeRepository } from "../repositories/ModalidadeRepository";

type AdesaoModalidadeUseCaseDTO = {
  idAtletica: string;
  idModalidade: string;
};

export class AdesaoModalidadeUseCase {
  constructor(
    private readonly atleticaRepo: IAtleticaRepository,
    private readonly modalidadeRepo: IModalidadeRepository
  ) {}

  async execute(props: AdesaoModalidadeUseCaseDTO) {
    const adesao = {
      atletica: await this.atleticaRepo
        .searchByID(props.idAtletica)
        .then((res: Atletica) => res)
        .catch((err: Error) => err),
      modalidade: await this.modalidadeRepo
        .searchByID(props.idModalidade)
        .then((res: Modalidade) => res)
        .catch((err: Error) => err),
    };

    if (adesao.atletica instanceof Error) {
      return new Error(
        "Erro ao encontrar atletica: " + adesao.atletica.message
      );
    }
    if (adesao.modalidade instanceof Error) {
      return new Error(
        "Erro ao encontrar modalidade: " + adesao.modalidade.message
      );
    }

    return adesao;
  }
}
