import { Request, Response } from "express";
import { AtleticaRepository } from "../../infra/PrismaRepositories/atletica-repository";

export class ProcurarTodasAtleticasController {
  async handler(req: Request, res: Response) {
    const repo = new AtleticaRepository();

    const response = await repo.searchAll();
    return res.json(response);
  }
}
