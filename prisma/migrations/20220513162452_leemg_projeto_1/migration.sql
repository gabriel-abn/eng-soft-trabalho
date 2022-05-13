-- CreateTable
CREATE TABLE `Atletica` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `faculdade` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `confirmacao` BOOLEAN NOT NULL,

    PRIMARY KEY (`cnpj`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evento` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modalidade` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ambiente` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Membro` (
    `id` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `atleticaCnpj` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rg`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AtleticaToEvento` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AtleticaToEvento_AB_unique`(`A`, `B`),
    INDEX `_AtleticaToEvento_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AtleticaToModalidade` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AtleticaToModalidade_AB_unique`(`A`, `B`),
    INDEX `_AtleticaToModalidade_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Membro` ADD CONSTRAINT `Membro_atleticaCnpj_fkey` FOREIGN KEY (`atleticaCnpj`) REFERENCES `Atletica`(`cnpj`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AtleticaToEvento` ADD CONSTRAINT `_AtleticaToEvento_A_fkey` FOREIGN KEY (`A`) REFERENCES `Atletica`(`cnpj`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AtleticaToEvento` ADD CONSTRAINT `_AtleticaToEvento_B_fkey` FOREIGN KEY (`B`) REFERENCES `Evento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AtleticaToModalidade` ADD CONSTRAINT `_AtleticaToModalidade_A_fkey` FOREIGN KEY (`A`) REFERENCES `Atletica`(`cnpj`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AtleticaToModalidade` ADD CONSTRAINT `_AtleticaToModalidade_B_fkey` FOREIGN KEY (`B`) REFERENCES `Modalidade`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
