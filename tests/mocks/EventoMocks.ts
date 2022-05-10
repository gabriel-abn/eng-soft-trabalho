import faker from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import { Evento } from "../../src/domain/Evento";

export const mockEvento = (): Evento => {
  return Evento.create({
    id: uuid(),
    nome: faker.word.noun(),
    local: faker.address.city(),
    data: faker.date.month() + " " + faker.date.weekday(),
  });
};
