/*
  Warnings:

  - Changed the type of `offeredSince` on the `Service` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `experience` on table `Study` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Service` DROP COLUMN `offeredSince`,
    ADD COLUMN `offeredSince` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Study` MODIFY `experience` ENUM('JUNIOR', 'MIDDLE', 'SENIOR', 'MASTER') NOT NULL DEFAULT 'MIDDLE';
