import { AtleticaRepository } from "../repositories/AtleticaRepository";

export class AcceptAtleticaUseCase {
  constructor(private readonly atleticaRepo: AtleticaRepository) {}

  async execute(id: string) {
    const atletica = await this.atleticaRepo
      .searchByID(id)
      .then((res) => {
        return res;
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });

    if (atletica.props.confirmacao == false) {
      atletica.setConfirmationTrue();
      return atletica;
    } else {
      throw new Error("Atletica já tem status 'Confirmado'.");
    }
  }
}
