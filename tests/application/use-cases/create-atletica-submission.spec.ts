import { AtleticaRepository } from "../../../src/infra/PrismaRepositories/atletica-repository";
import { CreateAtleticaSubmissionUseCase } from "../../../src/application/use-cases/criar-atletica-submissao";
import { Atletica, AtleticaProps } from "../../../src/domain/Atletica";
import { mockAtleticaNaoConfirmada } from "../../mocks/AtleticaMocks";

describe("Create Atletica submission to be accepted by adminstrator in memory repository", () => {
  it("should be able to send request to be accepted", async () => {
    const atleticaCreate = mockAtleticaNaoConfirmada();
    const privateRepo = new AtleticaRepository();
    const sut = new CreateAtleticaSubmissionUseCase(privateRepo);

    const response = await sut
      .execute(atleticaCreate.props)
      .then((res: AtleticaProps) => {
        return res;
      });

    console.log(response);
    expect(response).toStrictEqual<AtleticaProps>({ ...atleticaCreate.props });
    expect(response).toHaveProperty("confirmacao", 0);
  });
});
