import { Membro, MembroProps } from "../../domain/Membro";

export interface IMembroRepository {
  insert(membro: Membro): Promise<MembroProps>;
  searchByRG(rg: string): Promise<MembroProps | Error>;
}
