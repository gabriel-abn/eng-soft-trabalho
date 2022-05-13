import { AtleticaRepository } from "../../../src/infra/PrismaRepositories/atletica-repository";
import { CreateAtleticaSubmissionUseCase } from "../../../src/application/use-cases/criar-atletica-submissao";
import { Atletica } from "../../../src/domain/Atletica";
import { mockAtleticaNaoConfirmada } from "../../mocks/AtleticaMocks";

describe("Create Atletica submission to be accepted by adminstrator in memory repository", () => {
  it("should be able to send request to be accepted", async () => {
    const atleticaCreate = mockAtleticaNaoConfirmada();
    const privateRepo = new AtleticaRepository();
    const sut = new CreateAtleticaSubmissionUseCase(privateRepo);

    const response = await sut
      .execute(atleticaCreate.props)
      .then((res) => {
        if (res instanceof Atletica) {
          console.log(JSON.stringify(res));
          return res;
        }
      })
      .catch((err) => {
        console.log(err);
        return new Error("Unable to create atletica.");
      });

    expect(response).toBeInstanceOf(Atletica);
    expect(response).toHaveProperty("props.confirmacao", false);
  });
});
