import faker from "@faker-js/faker";
import { v4 } from "uuid";
import { Modalidade, ModalidadeAmbiente } from "../../src/domain/Modalidade";

export const ModalidadePresencialMock = Modalidade.create({
  id: v4(),
  nome: faker.word.noun(),
  ambiente: ModalidadeAmbiente.presencial,
});

export const ModalidadeOnlineMock = Modalidade.create({
  id: v4(),
  nome: faker.word.noun(),
  ambiente: ModalidadeAmbiente.online,
});
