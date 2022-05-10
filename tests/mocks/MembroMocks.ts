import faker from "@faker-js/faker";
import { v4 } from "uuid";
import { Membro } from "../../src/domain/Membro";

export const MembroMock = Membro.create({
  nome: faker.name.findName(),
  atletica: faker.name.jobTitle(),
  id: v4(),
});
