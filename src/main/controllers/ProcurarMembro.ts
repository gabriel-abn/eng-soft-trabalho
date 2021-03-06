import { Request, Response } from "express";
import { MembroRepository } from "../../infra/PrismaRepositories/membro-repository";

export class ProcurarMembroRGController {
  async handler(req: Request, res: Response) {
    const repo = new MembroRepository();
    const { rg } = req.body;

    const response = await repo.searchByRG(rg);

    return res.json(response);
  }
}

export class ProcurarMembrosAtleticaController {
  async handler(req: Request, res: Response) {
    const { atleticaCnpj } = req.body;
    const repo = new MembroRepository();
    const result = await repo.searchByAtletica(atleticaCnpj);

    return res.json(result);
  }
}

export class ProcurarTodosMembros {
  async handler(req: Request, res: Response) {
    const repo = new MembroRepository();
    const result = await repo.searchAll();

    return res.json(result);
  }
}
