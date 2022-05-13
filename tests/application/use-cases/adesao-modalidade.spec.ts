import { mockAtleticaConfirmada } from "../../mocks/AtleticaMocks";
import { mockModalidadeIndividualPresencial } from "../../mocks/ModalidadeMocks";
import { AdesaoModalidadeUseCase } from "../../../src/application/use-cases/aderir-modalidade";
import { AtleticaRepository } from "../../../src/infra/PrismaRepositories/atletica-repository";
import { ModalidadeRepository } from "../../../src/infra/PrismaRepositories/modalidade-repository";

describe("Adesao de modalidade por atlética", () => {
  it("deve cadastrar uma modalidade existente na atlética", async () => {
    const atletica = mockAtleticaConfirmada();
    const modalidade = mockModalidadeIndividualPresencial();

    const repository = {
      atletica: new AtleticaRepository(),
      modalidade: new ModalidadeRepository(),
    };

    const sut = new AdesaoModalidadeUseCase(
      repository.atletica,
      repository.modalidade
    );
  });
});
