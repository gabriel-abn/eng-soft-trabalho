import { Membro } from "../../domain/Membro";

export interface MembroRepository {
  insert(membro: Membro): Promise<Membro | Error>;
  searchByID(id: string): Promise<Membro | Error>;
}
