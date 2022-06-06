import { Request, Response } from "express";
import { CreateMembroUseCase } from "../../application/use-cases/cadastrar-membro";
import { MembroRepository } from "../../infra/PrismaRepositories/membro-repository";

export class CadastrarMembroController {
  async handler(req: Request, res: Response) {
    const { id, rg, nome, atleticaCnpj } = req.body;
    const repo = new MembroRepository();
    console.log(req.body);
    const result = await new CreateMembroUseCase(repo).execute({
      id,
      rg,
      nome,
      atleticaCnpj,
    });

    return res.json(result);
  }
}
