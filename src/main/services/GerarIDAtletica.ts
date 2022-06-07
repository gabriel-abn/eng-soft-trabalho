export const GerarIDAtletica = (nome: string, cnpj: string) => {
  const id = nome.slice(0, 3) + cnpj.slice(0, 3);

  return id.toUpperCase();
};
