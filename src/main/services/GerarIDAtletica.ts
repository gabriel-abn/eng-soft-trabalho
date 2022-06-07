export const GerarIDAtletica = (nome: string, cnpj: string) => {
  return nome.slice(0, 3) + cnpj.slice(0, 3);
};
