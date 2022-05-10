import faker from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import { Evento } from "../../src/domain/Evento";

export const EventoMock = Evento.create({
  id: uuid(),
  nome: faker.word.noun(),
});
