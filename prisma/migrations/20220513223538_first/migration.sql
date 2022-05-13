-- CreateTable
CREATE TABLE `inscriptions` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `bornDate` DATETIME(3) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `medicine` VARCHAR(191) NOT NULL,
    `medicineName` VARCHAR(191) NULL,
    `allergy` VARCHAR(191) NOT NULL,
    `allergyName` VARCHAR(191) NULL,
    `church` VARCHAR(191) NOT NULL,
    `churchName` VARCHAR(191) NULL,
    `paymentMethod` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
