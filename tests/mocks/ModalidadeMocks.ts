import faker from "@faker-js/faker";
import { v4 } from "uuid";
import {
  Modalidade,
  ModalidadeAmbiente,
  ModalidadeTipo,
} from "../../src/domain/Modalidade";

export const mockModalidadeIndividualPresencial = (): Modalidade =>
  Modalidade.create({
    id: v4().toString(),
    nome: faker.word.noun(),
    ambiente: ModalidadeAmbiente.presencial,
    tipo: ModalidadeTipo.individual,
  });

export const mockModalidadeIndividualOnline = (): Modalidade =>
  Modalidade.create({
    id: v4().toString(),
    nome: faker.word.noun(),
    ambiente: ModalidadeAmbiente.online,
    tipo: ModalidadeTipo.individual,
  });
export const mockModalidadeColetivoPresencial = (): Modalidade =>
  Modalidade.create({
    id: v4().toString(),
    nome: faker.word.noun(),
    ambiente: ModalidadeAmbiente.presencial,
    tipo: ModalidadeTipo.coletivo,
  });

export const mockModalidadeColetivoOnline = (): Modalidade =>
  Modalidade.create({
    id: v4().toString(),
    nome: faker.word.noun(),
    ambiente: ModalidadeAmbiente.online,
    tipo: ModalidadeTipo.coletivo,
  });
