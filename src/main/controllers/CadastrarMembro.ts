import { Request, Response } from "express";
import { CreateMembroUseCase } from "../../application/use-cases/cadastrar-membro";
import { MembroRepository } from "../../infra/PrismaRepositories/membro-repository";
import { GerarIDDefault } from "../services/GerarIDDefault";

export class CadastrarMembroController {
  async handler(req: Request, res: Response) {
    const { rg, nome, atleticaCnpj } = req.body;
    const repo = new MembroRepository();
    let id = GerarIDDefault();
    const result = await new CreateMembroUseCase(repo).execute({
      id,
      rg,
      nome,
      atleticaCnpj,
    });

    return res.json(result);
  }
}
