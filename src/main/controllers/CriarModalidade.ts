import { Request, Response } from "express";
import { CreateModalidadeUseCase } from "../../application/use-cases/criar-modalidade";
import { ModalidadeRepository } from "../../infra/PrismaRepositories/modalidade-repository";

export class CriarModalidadeController {
  async handler(req: Request, res: Response) {
    const repo = new ModalidadeRepository();
    const { id, nome, ambiente, tipo } = req.body;
    const result = await new CreateModalidadeUseCase(repo).execute({
      id,
      nome,
      ambiente,
      tipo,
    });

    return res.json(result);
  }
}
