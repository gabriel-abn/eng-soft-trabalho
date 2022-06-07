import { Request, Response } from "express";
import { Evento } from "../../domain/Evento";
import { EventoRepository } from "../../infra/PrismaRepositories/evento-repository";

export class CriarEventoController {
  async handler(req: Request, res: Response) {
    const repo = new EventoRepository();
    const evento = Evento.create({ ...req.body });
    const result = await repo.insert(evento);

    return res.json(result);
  }
}
