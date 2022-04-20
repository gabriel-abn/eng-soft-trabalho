import { Atletica } from "../../domain/Atletica";

export interface AtleticaRepository {
  insert(atletica: Atletica): Promise<Atletica | Error>;
  searchByID(id: string): Promise<Atletica | Error>;
  searchByAcceptence(acceptence: boolean): Promise<Atletica[]>;
}
