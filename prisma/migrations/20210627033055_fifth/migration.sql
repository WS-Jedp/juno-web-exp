/*
  Warnings:

  - You are about to drop the column `last_name` on the `Being` table. All the data in the column will be lost.
  - Added the required column `lastName` to the `Being` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Being` DROP COLUMN `last_name`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3);

-- AlterTable
ALTER TABLE `Idea` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3);

-- AlterTable
ALTER TABLE `Partner` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3);

-- AlterTable
ALTER TABLE `Project` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `finishedAt` DATETIME(3),
    ADD COLUMN `updatedAt` DATETIME(3);

-- AlterTable
ALTER TABLE `Service` ADD COLUMN `offeredSince` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3);

-- AlterTable
ALTER TABLE `Study` ADD COLUMN `masteredAt` DATETIME(3),
    ADD COLUMN `startedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
