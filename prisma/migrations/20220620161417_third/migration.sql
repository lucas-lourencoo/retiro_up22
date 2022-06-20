/*
  Warnings:

  - Added the required column `celphone` to the `inscriptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `inscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inscriptions` ADD COLUMN `celphone` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;
