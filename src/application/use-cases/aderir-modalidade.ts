import { AtleticaProps } from "../../domain/Atletica";
import { ModalidadeProps } from "../../domain/Modalidade";
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
        .then((res: AtleticaProps) => res),
      modalidade: await this.modalidadeRepo
        .searchByID(props.idModalidade)
        .then((res: ModalidadeProps) => res),
    };

    if (!adesao.atletica) {
      throw new Error("Erro ao encontrar atletica.");
    }
    if (!adesao.modalidade) {
      throw new Error("Erro ao encontrar modalidade");
    }

    return adesao;
  }
}
