import { Evento, EventoProps } from "../../domain/Evento";

export interface IEventoRepository {
  insert(evento: Evento): Promise<EventoProps>;
  procurarPorID(id: string): Promise<EventoProps>;
  procurarTodosEventos(): Promise<EventoProps[]>;
}
