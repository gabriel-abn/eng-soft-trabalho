import { Atletica, AtleticaProps } from "../../domain/Atletica";
import { IAtleticaRepository } from "../../application/repositories/AtleticaRepository";
import { prisma } from "./prismaClient";
import { Prisma } from "@prisma/client";

export class AtleticaRepository implements IAtleticaRepository {
  async acceptAtletica(cnpj: string): Promise<AtleticaProps | Error> {
    const query = Prisma.raw(
      `UPDATE leemgProjeto.Atletica SET confirmacao = ${1} WHERE (cnpj = ${cnpj});`
    );
    const alter = await prisma.$executeRaw(query);

    if (alter == 0) {
      return new Error("Erro ao aceitar atletica");
    }

    const request = await prisma.$queryRaw<
      AtleticaProps[]
    >`SELECT * FROM leemgProjeto.Atletica WHERE cnpj = ${cnpj};`;

    return request.at(0);
  }
  async insert(atletica: Atletica): Promise<AtleticaProps> {
    const query = Prisma.raw(
      `INSERT INTO leemgProjeto.Atletica (id, nome, cnpj, faculdade, cidade, confirmacao) VALUES ('${atletica.props.id}', '${atletica.props.nome}', '${atletica.props.cnpj}', '${atletica.props.faculdade}', '${atletica.props.cidade}', ${atletica.props.confirmacao});`
    );
    const request = await prisma.$executeRaw(query);

    const response = await prisma.$queryRaw<
      AtleticaProps[]
    >`SELECT * FROM leemgProjeto.Atletica WHERE cnpj = ${atletica.props.cnpj}`;
    return response.at(0);
  }

  async searchByID(id: string): Promise<AtleticaProps> {
    const request = await prisma.$queryRaw<
      AtleticaProps[]
    >`SELECT * FROM leemgProjeto.Atletica WHERE cnpj = ${id};`;

    return request.at(0);
  }

  async searchByAcceptence(acceptence: number): Promise<AtleticaProps[]> {
    const request = await prisma.$queryRaw<
      AtleticaProps[]
    >`SELECT * FROM leemgProjeto.Atletica WHERE confirmacao = ${acceptence}`;

    return request;
  }
}
