import { Prisma } from "@prisma/client";
import { IModalidadeRepository } from "../../application/repositories/ModalidadeRepository";
import { Modalidade, ModalidadeProps } from "../../domain/Modalidade";
import { prisma } from "./prismaClient";

export class ModalidadeRepository implements IModalidadeRepository {
  async create(modalidade: Modalidade): Promise<ModalidadeProps> {
    const query = Prisma.raw(
      `INSERT INTO "Modalidade" (id, nome, ambiente, tipo) VALUES ('${modalidade.props.id}, ${modalidade.props.nome}, ${modalidade.props.ambiente}, ${modalidade.props.tipo});`
    );
    const request = await prisma.$executeRaw(query);

    const response = await prisma.$queryRaw<
      ModalidadeProps[]
    >`SELECT * FROM "Modalidade" WHERE id = ${modalidade.props.id}`;
    return response.at(0);
  }
  async searchByID(id: string): Promise<ModalidadeProps> {
    const response = await prisma.$queryRaw<
      ModalidadeProps[]
    >`SELECT * FROM "Modalidade" WHERE id = ${id}`;
    return response.at(0);
  }
}
