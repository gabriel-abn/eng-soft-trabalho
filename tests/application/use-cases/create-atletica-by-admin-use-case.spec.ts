import { CreateAtleticaByAdminUseCase } from "../../../src/application/use-cases/criar-atletica-por-admin";
import { mockAtleticaConfirmada } from "../../mocks/AtleticaMocks";
import { AtleticaRepository } from "../../../src/infra/PrismaRepositories/atletica-repository";
import { prisma } from "../../../src/infra/PrismaRepositories/prismaClient";

describe("Create an Atletica by administrator", () => {
  beforeAll(async () => {
    await prisma.$queryRaw`DELETE FROM leemgProjeto.Atletica`;
  });
  it("should be able to create an Atletica with confirmation status true", async () => {
    const atleticaCreate = mockAtleticaConfirmada();

    const atleticaRepo = new AtleticaRepository();
    const sut = new CreateAtleticaByAdminUseCase(atleticaRepo);

    console.log(atleticaCreate.props);
    const response = await sut
      .execute(atleticaCreate.props)
      .then((res) => {
        return res;
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });

    console.log(response);
    expect(response).toBeTruthy();
  });
});
