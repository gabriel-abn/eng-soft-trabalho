import { Modalidade } from "../../domain/Modalidade";

export interface IModalidadeRepository {
  create(modalidade: Modalidade): Promise<Modalidade>;
  searchByID(id: string): Promise<Modalidade>;
}
