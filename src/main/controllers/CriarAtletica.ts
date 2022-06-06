import { Request, Response } from "express";
import { CreateAtleticaSubmissionUseCase } from "../../application/use-cases/criar-atletica-submissao";
import { AtleticaRepository } from "../../infra/PrismaRepositories/atletica-repository";

export class CriarAtleticaController {
  async handler(req: Request, res: Response) {
    const repo = new AtleticaRepository();

    const result = await new CreateAtleticaSubmissionUseCase(repo).execute({
      ...req.body,
    });

    return res.json(result);
  }
}
