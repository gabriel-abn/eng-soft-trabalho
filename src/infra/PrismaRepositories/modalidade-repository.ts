import { IModalidadeRepository } from "../../application/repositories/ModalidadeRepository";
import { Modalidade } from "../../domain/Modalidade";

export class ModalidadeRepository implements IModalidadeRepository {
  private itens: Modalidade[] = [];

  async create(modalidade: Modalidade): Promise<Modalidade> {
    this.itens.push(modalidade);

    return this.itens.find((modl) => {
      if (modl.props.id == modalidade.props.id) {
        return modl;
      }
    });
  }
  async searchByID(id: string): Promise<Modalidade> {
    return this.itens.find((modl) => {
      if (modl.props.id == id) {
        return modl;
      }
    });
  }
}
