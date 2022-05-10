import { InMemoryAtleticaRepository } from "../../../src/application/repositories/InMemoryRepositories/in-memory-atletica-repo";
import { CreateAtleticaByAdminUseCase } from "../../../src/application/use-cases/criar-atletica-por-admin";
import { Atletica } from "../../../src/domain/Atletica";
import { AtleticaConfirmadaMock } from "../../mocks/AtleticaMocks";

describe("Create an Atletica by administrator in memory repository", () => {
  it("should be able to create an Atletica with confirmation status true", async () => {
    const atleticaCreate = AtleticaConfirmadaMock();

    const atleticaRepo = new InMemoryAtleticaRepository();
    const sut = new CreateAtleticaByAdminUseCase(atleticaRepo);

    const response = await sut
      .execute(atleticaCreate.props)
      .then((res) => {
        return res;
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });

    expect(response).toBeInstanceOf(Atletica);
    expect(response).toHaveProperty("props.confirmacao", true);
  });
});
