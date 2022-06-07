import { Prisma } from "@prisma/client";
import { IMembroRepository } from "../../application/repositories/MembroRepository";
import { Membro, MembroProps } from "../../domain/Membro";
import { prisma } from "./prismaClient";

export class MembroRepository implements IMembroRepository {
  async searchByAtletica(atleticaCnpj: string): Promise<MembroProps[]> {
    const query = Prisma.raw(
      `SELECT * FROM leemgProjeto.Membro WHERE atleticaCnpj = ${atleticaCnpj}`
    );

    const response = await prisma.$queryRaw<MembroProps[]>(query);
    return response;
  }
  async insert(membro: Membro): Promise<MembroProps> {
    const query = Prisma.raw(
      `INSERT INTO leemgProjeto.Membro (id, rg, nome, atleticaCnpj) VALUES(${membro.props.id}, ${membro.props.rg}, ${membro.props.nome}, ${membro.props.atleticaCnpj})`
    );

    const rows = await prisma.$executeRaw(query);

    if (rows == 0) {
      throw new Error("Erro ao cadastrar membro");
    }

    const response =
      await prisma.$queryRaw<MembroProps>`SELECT * FROM leemgProjeto.Membro WHERE rg = ${membro.props.rg}`;
    return response;
  }
  async searchByRG(rg: string): Promise<MembroProps> {
    const query = Prisma.raw(
      `SELECT * FROM leemgProjeto.Membro WHERE rg = ${rg}`
    );

    const response = await prisma.$queryRaw<MembroProps>(query);
    return response;
  }
}
