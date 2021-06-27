/*
  Warnings:

  - The values [FRIEND] on the enum `Credential_credentialType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `shortDescription` on the `Partner` table. All the data in the column will be lost.
  - You are about to alter the column `state` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Enum("Project_state")` to `Enum("Project_state")`.
  - Added the required column `abstract` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Credential` MODIFY `credentialType` ENUM('JUNO', 'ALLY', 'PARTNER') NOT NULL DEFAULT 'JUNO';

-- AlterTable
ALTER TABLE `Partner` DROP COLUMN `shortDescription`,
    ADD COLUMN `abstract` VARCHAR(191) NOT NULL,
    ADD COLUMN `partnerCategory` ENUM('AGENCY', 'SOCIAL', 'RESEARCH', 'FREELANCE', 'COMPANY') NOT NULL DEFAULT 'SOCIAL';

-- AlterTable
ALTER TABLE `Project` MODIFY `state` ENUM('ACCOMPLISHED', 'COMING_SOON') NOT NULL DEFAULT 'COMING_SOON';
