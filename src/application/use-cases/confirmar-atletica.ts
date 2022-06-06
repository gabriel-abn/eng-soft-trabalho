import { Atletica, AtleticaProps } from "../../domain/Atletica";
import { IAtleticaRepository } from "../repositories/AtleticaRepository";

export class AcceptAtleticaUseCase {
  constructor(private readonly atleticaRepo: IAtleticaRepository) {}

  async execute(id: string) {
    const atletica = await this.atleticaRepo
      .searchByID(id)
      .then((res: AtleticaProps) => {
        return res;
      })
      .catch((err: Error) => {
        return new Error(err.message);
      });

    return atletica;
  }
}
