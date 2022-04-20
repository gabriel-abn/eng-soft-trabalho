import { Entity } from "./core/Entity";

type AtleticaProps = {
  id: string;
  nome: string;
  cnpj: string;
  faculdade: string;
  cidade: string;
  confirmacao?: boolean;
};

export class Atletica extends Entity<AtleticaProps> {
  private constructor(props: AtleticaProps, id?: string) {
    props.confirmacao = false;
    super(props, id);
  }

  static create(props: AtleticaProps, id?: string) {
    return new Atletica({ ...props, id });
  }

  public setConfirmationTrue() {
    this.props.confirmacao = true;
  }

  public setConfirmationFalse()
  {
    this.props.confirmacao = false;
  }
}
