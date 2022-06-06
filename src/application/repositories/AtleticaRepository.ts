import { Atletica, AtleticaProps } from "../../domain/Atletica";

export interface IAtleticaRepository {
  insert(atletica: Atletica): Promise<AtleticaProps>;
  searchByID(id: string): Promise<AtleticaProps>;
  searchByAcceptence(acceptence: number): Promise<AtleticaProps[]>;
  acceptAtletica(cnpj: string): Promise<AtleticaProps | Error>;
}
