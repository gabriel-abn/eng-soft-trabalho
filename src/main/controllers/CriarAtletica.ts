import { Request, Response } from "express";
import { CreateAtleticaSubmissionUseCase } from "../../application/use-cases/criar-atletica-submissao";
import { AtleticaRepository } from "../../infra/PrismaRepositories/atletica-repository";
import { GerarIDAtletica } from "../services/GerarIDAtletica";

export class CriarAtleticaController {
  async handler(req: Request, res: Response) {
    const repo = new AtleticaRepository();
    const { nome, cnpj, faculdade, cidade } = req.body;
    let id = GerarIDAtletica(nome, cnpj);

    const result = await new CreateAtleticaSubmissionUseCase(repo).execute({
      id,
      nome,
      cnpj,
      faculdade,
      cidade,
    });

    return res.json(result);
  }
}
