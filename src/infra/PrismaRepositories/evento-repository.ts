import { Prisma } from ".prisma/client";
import { IEventoRepository } from "../../application/repositories/EventoRepository";
import { Evento, EventoProps } from "../../domain/Evento";
import { prisma } from "./prismaClient";

export class EventoRepository implements IEventoRepository {
  async procurarTodosEventos(): Promise<EventoProps[]> {
    const request = await prisma.$queryRaw<
      EventoProps[]
    >`SELECT * FROM leemgProjeto.Evento`;

    return request;
  }
  async insert(evento: Evento): Promise<EventoProps> {
    const query = Prisma.raw(
      `INSERT INTO leemgProjeto.Evento VALUES (${evento.props.id}, ${evento.props.nome}, ${evento.props.data}, ${evento.props.local})`
    );
    await prisma.$executeRaw(query);

    const response =
      await prisma.$queryRaw<EventoProps>`SELECT * FROM leemgProjeto.Evento WHERE id=${evento.props.id}`;

    return response;
  }
  async procurarPorID(id: string): Promise<EventoProps> {
    const request =
      await prisma.$queryRaw<EventoProps>`SELECT * FROM leemgProjeto.Evento WHERE id=${id}`;

    return request;
  }
}
