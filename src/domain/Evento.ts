import { Entity } from "./core/Entity";

type EventoProps = {
  id: string;
  nome: string;
  data: string;
  local: string;
};

export class Evento extends Entity<EventoProps> {
  constructor(props: EventoProps, _id?: string) {
    super(props, _id);
  }

  static create(props: EventoProps, _id?: string) {
    return new Evento({ ...props }, _id);
  }
}
