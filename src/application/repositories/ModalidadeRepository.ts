import { Modalidade, ModalidadeProps } from "../../domain/Modalidade";

export interface IModalidadeRepository {
  create(modalidade: Modalidade): Promise<ModalidadeProps>;
  searchByID(id: string): Promise<ModalidadeProps>;
}
