import { Entity } from "./core/Entity";

export type AtleticaProps = {
  id: string;
  nome: string;
  cnpj: string;
  faculdade: string;
  cidade: string;
  confirmacao?: boolean;
};

export class Atletica extends Entity<AtleticaProps> {
  private constructor(props: AtleticaProps, _id?: string) {
    super(props, _id);
  }

  static create(props: AtleticaProps, _id?: string) {
    return new Atletica({ ...props });
  }

  public setConfirmationTrue() {
    this.props.confirmacao = true;
  }
}
