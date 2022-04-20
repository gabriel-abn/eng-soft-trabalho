import { InMemoryAtleticaRepository } from "../../../src/application/repositories/InMemoryRepositories/in-memory-atletica-repo";
import { CreateAtleticaByAdminUseCase } from "../../../src/application/use-cases/create-atletica-by-admin";
import { Atletica } from "../../../src/domain/Atletica";

describe("Create an Atletica by administrator in memory repository", () => {
  it("should be able to create an Atletica with confirmation status true", async () => {
    const atleticaCreate = Atletica.create({
      id: "LOUJM",
      nome: "Loucomotiva",
      cnpj: "123456789/0000-01",
      cidade: "João Monlevade",
      faculdade: "UFOP",
    });

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
