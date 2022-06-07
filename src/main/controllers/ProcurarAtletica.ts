import { Request, Response } from "express";
import { AtleticaRepository } from "../../infra/PrismaRepositories/atletica-repository";

export class ProcurarAtleticaController {
  async handler(req: Request, res: Response) {
    const { id } = req.body;
    const repo = new AtleticaRepository();
    const result = await repo.searchByID(id);

    return res.json(result);
  }
}
