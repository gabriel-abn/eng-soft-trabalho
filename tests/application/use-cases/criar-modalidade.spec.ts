import { CreateModalidadeUseCase } from "../../../src/application/use-cases/criar-modalidade";
import { ModalidadeProps } from "../../../src/domain/Modalidade";
import { ModalidadeRepository } from "../../../src/infra/PrismaRepositories/modalidade-repository";
import { mockModalidadeColetivoOnline } from "../../mocks/ModalidadeMocks";

const makeSut = () => {
  const repository = new ModalidadeRepository();
  const sut = new CreateModalidadeUseCase(repository);
  const mock = mockModalidadeColetivoOnline();

  return { repository, sut, mock };
};

describe("criação de modalidade", () => {
  it("deve ser capaz de criar uma modalidade", async () => {
    const { sut, mock } = makeSut();
    const response = await sut.execute({ ...mock.props });
    console.log(response);
    expect(response).toStrictEqual<ModalidadeProps>({ ...mock.props });
  });
});
