import { Request, Response } from "express";
import { Evento } from "../../domain/Evento";
import { EventoRepository } from "../../infra/PrismaRepositories/evento-repository";
import { GerarIDDefault } from "../services/GerarIDDefault";

export class CriarEventoController {
  async handler(req: Request, res: Response) {
    const { nome, data, local } = req.body;
    let id = GerarIDDefault();
    const repo = new EventoRepository();
    const evento = Evento.create({ id, nome, data, local });
    const result = await repo.insert(evento);

    return res.json(result);
  }
}
