import { Modalidade } from "../../domain/Modalidade";

export interface ModalidadeRepository {
  create(modalidade: Modalidade): Promise<Modalidade | Error>;
  searchByID(id: string): Promise<Modalidade>;
}
