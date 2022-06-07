import { v4 as uuid } from "uuid";

export const GerarIDDefault = () => {
  const id = uuid();

  return id.slice(0, 5).replaceAll("-", "").toUpperCase();
};
