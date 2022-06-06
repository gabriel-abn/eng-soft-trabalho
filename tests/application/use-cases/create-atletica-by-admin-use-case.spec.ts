import { CreateAtleticaByAdminUseCase } from "../../../src/application/use-cases/criar-atletica-por-admin";
import { mockAtleticaConfirmada } from "../../mocks/AtleticaMocks";
import { AtleticaRepository } from "../../../src/infra/PrismaRepositories/atletica-repository";
import { prisma } from "../../../src/infra/PrismaRepositories/prismaClient";
import { AtleticaProps } from "../../../src/domain/Atletica";

const makeSut = () => {
  const atleticaRepo = new AtleticaRepository();
  const sut = new CreateAtleticaByAdminUseCase(atleticaRepo);

  return { atleticaRepo, sut };
};

describe("Criar atlética pelo administrador", () => {
  beforeAll(async () => {
    await prisma.$queryRaw`DELETE FROM leemgProjeto.Atletica`;
  });
  it("deve cadastrar uma atlética com status de confirmação '1'", async () => {
    const atleticaCreate = mockAtleticaConfirmada();
    const { sut } = makeSut();

    const response = await sut
      .execute(atleticaCreate.props)
      .then((res) => {
        return res;
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });

    expect(response).toStrictEqual<AtleticaProps>({ ...atleticaCreate.props });
    expect(response).toHaveProperty("confirmacao", 1);
  });
});
