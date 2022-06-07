import { Request, Response } from "express";
import { AcceptAtleticaUseCase } from "../../application/use-cases/confirmar-atletica";
import { AtleticaRepository } from "../../infra/PrismaRepositories/atletica-repository";

export class ConfirmarAtleticaController {
  async handler(req: Request, res: Response) {
    const { id } = req.body;
    const repo = new AtleticaRepository();

    const result = await new AcceptAtleticaUseCase(repo).execute(id);

    return res.json(result);
  }
}
