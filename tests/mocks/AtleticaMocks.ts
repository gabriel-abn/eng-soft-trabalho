import { Atletica } from "../../src/domain/Atletica";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

export const mockAtleticaConfirmada = (): Atletica =>
  Atletica.create({
    id: uuid(),
    cidade: faker.address.cityName(),
    faculdade: faker.company.companyName(),
    nome: faker.name.jobTitle(),
    cnpj: faker.datatype.uuid(),
    confirmacao: 1,
  });

export const mockAtleticaNaoConfirmada = (): Atletica =>
  Atletica.create({
    id: uuid(),
    cidade: faker.address.cityName(),
    faculdade: faker.company.companyName(),
    nome: faker.name.jobTitle(),
    cnpj: faker.datatype.uuid(),
    confirmacao: 0,
  });
