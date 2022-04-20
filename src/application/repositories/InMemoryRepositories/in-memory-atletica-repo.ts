import { Atletica } from "../../../domain/Atletica";
import { AtleticaRepository } from "../AtleticaRepository";

export class InMemoryAtleticaRepository implements AtleticaRepository {
  private inMemory: Atletica[] = [];

  async insert(atletica: Atletica): Promise<Atletica | Error> {
    this.inMemory.push(atletica);

    return this.inMemory.find((atleticaMemory) => {
      if (atleticaMemory.props.cnpj == atletica.props.cnpj)
        return atleticaMemory;
    });
  }
  async searchByID(id: string): Promise<Atletica> {
    return this.inMemory.find((atleticaMemory) => {
      if (atleticaMemory.props.id == id) return atleticaMemory;
    });
  }

  async searchByAcceptence(acceptence: boolean): Promise<Atletica[]> {
    return this.inMemory.map((atletica) => {
      if ((atletica.props.confirmacao = acceptence)) {
        return atletica;
      }
    });
  }
}
