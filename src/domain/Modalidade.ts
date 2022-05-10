import { Entity } from "./core/Entity";

export enum ModalidadeAmbiente {
  presencial = "PRESENCIAL",
  online = "ONLINE",
}

export enum ModalidadeTipo {
  individual = "INDIVIDUAL",
  coletivo = "COLETIVO",
}

type ModalidadeProps = {
  id: string;
  nome: string;
  ambiente: string;
  tipo: string;
};

export class Modalidade extends Entity<ModalidadeProps> {
  constructor(props: ModalidadeProps, id?: string) {
    super(props, id);
  }

  static create(props: ModalidadeProps, id?: string) {
    return new Modalidade({ ...props, id });
  }
}
