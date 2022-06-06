import faker from "@faker-js/faker";
import { v4 } from "uuid";
import { Membro } from "../../src/domain/Membro";

export const mockMembro = (atletica: string): Membro =>
  Membro.create({
    nome: faker.name.findName(),
    rg: faker.phone.phoneNumberFormat(3),
    atletica: atletica,
    id: v4(),
  });
