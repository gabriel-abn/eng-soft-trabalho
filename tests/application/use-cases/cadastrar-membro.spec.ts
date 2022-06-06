import { CreateMembroUseCase } from "../../../src/application/use-cases/cadastrar-membro";
import { MembroProps } from "../../../src/domain/Membro";
import { AtleticaRepository } from "../../../src/infra/PrismaRepositories/atletica-repository";
import { MembroRepository } from "../../../src/infra/PrismaRepositories/membro-repository";
import { prisma } from "../../../src/infra/PrismaRepositories/prismaClient";
import { mockAtleticaConfirmada } from "../../mocks/AtleticaMocks";
import { mockMembro } from "../../mocks/MembroMocks";

const makeSut = () => {
  const repositoryMembro = new MembroRepository();
  const repositoryAtletica = new AtleticaRepository();
  const sut = new CreateMembroUseCase(repositoryMembro);
  const atleticaConfirmada = mockAtleticaConfirmada();
  const membro = mockMembro(atleticaConfirmada.props.cnpj);

  return {
    repositoryMembro,
    sut,
    membro,
    repositoryAtletica,
    atleticaConfirmada,
  };
};

describe("cadastro de membro pro atlética", () => {
  beforeAll(async () => {
    await prisma.$queryRaw`DELETE FROM leemgProjeto.Membro`;
  });
  it("deve cadastrar um membro dentro da atlética", async () => {
    const { sut, membro } = makeSut();
    const response = await sut.execute({ ...membro.props });
    console.log(response);
    expect(response).toStrictEqual<MembroProps>({ ...membro.props });
  });
  it("deve cadastrar um membro em uma atletica ja existente", async () => {
    const { sut, membro, repositoryAtletica, atleticaConfirmada } = makeSut();
    const atletica = await repositoryAtletica.searchByID(
      atleticaConfirmada.props.cnpj
    );
  });
});
