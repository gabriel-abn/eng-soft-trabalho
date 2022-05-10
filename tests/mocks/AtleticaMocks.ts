import { Atletica } from "../../src/domain/Atletica";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

export const AtleticaConfirmadaMock = (): Atletica =>
  Atletica.create({
    id: uuid(),
    cidade: faker.address.cityName(),
    faculdade: faker.company.companyName(),
    nome: faker.name.jobTitle(),
    cnpj: faker.datatype.uuid(),
    confirmacao: true,
  });

export const AtleticaNaoConfirmadaMock = (): Atletica =>
  Atletica.create({
    id: uuid(),
    cidade: faker.address.cityName(),
    faculdade: faker.company.companyName(),
    nome: faker.name.jobTitle(),
    cnpj: faker.datatype.uuid(),
    confirmacao: false,
  });
