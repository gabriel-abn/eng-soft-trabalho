import { Entity } from "./core/Entity";

type MembroProps = {
  id: string;
  nome: string;
  atletica: string;
};

export class Membro extends Entity<MembroProps> {
  constructor(props: MembroProps, _id?: string) {
    super(props, _id);
  }

  static create(props: MembroProps, _id: string) {
    return new Membro({ ...props }, _id);
  }
}
