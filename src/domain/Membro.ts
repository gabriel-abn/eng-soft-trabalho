import { Entity } from "./core/Entity";

export type MembroProps = {
  id: string;
  rg: string;
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
