import { Modalidade } from "../../domain/Modalidade";
import { ModalidadeRepository } from "../repositories/ModalidadeRepository";

type CreateModalidadeDTO = {
  id: string;
  nome: string;
  ambiente: string;
};

export class CreateModalidadeUseCase {
  constructor(private readonly modalidadeRepo: ModalidadeRepository) {}

  async execute(props: CreateModalidadeDTO, id?: string) {
    const modalidade = Modalidade.create({ ...props, id });

    const response = await this.modalidadeRepo
      .create(modalidade)
      .then((res) => {
        return res;
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });
  }
}
