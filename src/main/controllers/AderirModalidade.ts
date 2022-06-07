import { Request, Response } from "express";
import { AdesaoModalidadeUseCase } from "../../application/use-cases/aderir-modalidade";
import { AtleticaRepository } from "../../infra/PrismaRepositories/atletica-repository";
import { ModalidadeRepository } from "../../infra/PrismaRepositories/modalidade-repository";

export class AderirModalidadeController {
  async handler(req: Request, res: Response) {
    const { idAtletica, idModalidade } = req.body;
    const modalidadeRepo = new ModalidadeRepository();
    const atleticaRepo = new AtleticaRepository();
    const response = new AdesaoModalidadeUseCase(
      atleticaRepo,
      modalidadeRepo
    ).execute({ idAtletica, idModalidade });

    return res.json(response);
  }
}
