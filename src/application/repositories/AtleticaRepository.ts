import { Atletica } from "../../domain/Atletica";

export interface IAtleticaRepository {
  insert(atletica: Atletica): Promise<string>;
  searchByID(id: string): Promise<Atletica>;
  searchByAcceptence(acceptence: boolean): Promise<Atletica[]>;
}
