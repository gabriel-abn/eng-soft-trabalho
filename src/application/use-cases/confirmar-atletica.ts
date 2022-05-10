import { Atletica } from "../../domain/Atletica";
import { AtleticaRepository } from "../repositories/AtleticaRepository";

export class AcceptAtleticaUseCase {
  constructor(private readonly atleticaRepo: AtleticaRepository) {}

  async execute(id: string) {
    const atletica = await this.atleticaRepo
      .searchByID(id)
      .then((res: Atletica) => {
        res.setConfirmationTrue();
        return res;
      })
      .catch((err: Error) => {
        return new Error(err.message);
      });

    return atletica;
  }
}
