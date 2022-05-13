import { Atletica, AtleticaProps } from "../../domain/Atletica";
import { IAtleticaRepository } from "../../application/repositories/AtleticaRepository";
import { prisma } from "./prismaClient";
import { Prisma } from "@prisma/client";

export class AtleticaRepository implements IAtleticaRepository {
  async insert(atletica: Atletica): Promise<string> {
    const query = Prisma.raw(
      `INSERT INTO leemgProjeto.Atletica (id, nome, cnpj, faculdade, cidade, confirmacao) VALUES ('${atletica.props.id}', '${atletica.props.nome}', '${atletica.props.cnpj}', '${atletica.props.faculdade}', '${atletica.props.cidade}', ${atletica.props.confirmacao});`
    );
    const response = await prisma.$executeRaw(query);

    return response.toString();
  }
  async searchByID(id: string): Promise<Atletica> {}

  async searchByAcceptence(acceptence: boolean): Promise<Atletica[]> {}
}
