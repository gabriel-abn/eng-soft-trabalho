import { Request, Response } from "express";
import { EventoRepository } from "../../infra/PrismaRepositories/evento-repository";

export class ProcurarTodosEventosController {
  async handler(req: Request, res: Response) {
    const repo = new EventoRepository();
    const result = await repo.procurarTodosEventos();

    return res.json(result);
  }
}

export class ProcurarEventoIDController {
  async handler(req: Request, res: Response) {
    const { id } = req.body;

    const repo = new EventoRepository();
    const result = await repo.procurarPorID(id);

    return res.json(result);
  }
}
