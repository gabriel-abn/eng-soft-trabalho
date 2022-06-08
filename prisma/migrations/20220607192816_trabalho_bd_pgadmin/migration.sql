CREATE TABLE "Atletica" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "faculdade" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "confirmacao" BOOLEAN NOT NULL,

    CONSTRAINT "Atletica_pkey" PRIMARY KEY ("cnpj")
);

CREATE TABLE "Evento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "local" TEXT NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "Modalidade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ambiente" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Modalidade_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Membro" (
    "id" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "atleticaCnpj" TEXT NOT NULL,

    CONSTRAINT "Membro_pkey" PRIMARY KEY ("rg")
);

CREATE TABLE "_AtleticaToEvento" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

CREATE TABLE "_AtleticaToModalidade" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

CREATE UNIQUE INDEX "_AtleticaToEvento_AB_unique" ON "_AtleticaToEvento"("A", "B");

CREATE INDEX "_AtleticaToEvento_B_index" ON "_AtleticaToEvento"("B");

CREATE UNIQUE INDEX "_AtleticaToModalidade_AB_unique" ON "_AtleticaToModalidade"("A", "B");

CREATE INDEX "_AtleticaToModalidade_B_index" ON "_AtleticaToModalidade"("B");

ALTER TABLE "Membro" ADD CONSTRAINT "Membro_atleticaCnpj_fkey" FOREIGN KEY ("atleticaCnpj") REFERENCES "Atletica"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "_AtleticaToEvento" ADD CONSTRAINT "_AtleticaToEvento_A_fkey" FOREIGN KEY ("A") REFERENCES "Atletica"("cnpj") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_AtleticaToEvento" ADD CONSTRAINT "_AtleticaToEvento_B_fkey" FOREIGN KEY ("B") REFERENCES "Evento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_AtleticaToModalidade" ADD CONSTRAINT "_AtleticaToModalidade_A_fkey" FOREIGN KEY ("A") REFERENCES "Atletica"("cnpj") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_AtleticaToModalidade" ADD CONSTRAINT "_AtleticaToModalidade_B_fkey" FOREIGN KEY ("B") REFERENCES "Modalidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
