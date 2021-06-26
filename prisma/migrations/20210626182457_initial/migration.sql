-- CreateTable
CREATE TABLE `Being` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191),
    `shortDescription` VARCHAR(191) NOT NULL,
    `beingId` INTEGER NOT NULL,

    UNIQUE INDEX `Partner_beingId_unique`(`beingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Credential` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `credentialType` ENUM('JUNO', 'PARTNER', 'FRIEND') NOT NULL DEFAULT 'JUNO',
    `beingId` INTEGER NOT NULL,

    UNIQUE INDEX `Credential.email_unique`(`email`),
    UNIQUE INDEX `Credential_beingId_unique`(`beingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `abstract` VARCHAR(191),
    `description` VARCHAR(191) NOT NULL,
    `cover` VARCHAR(191) NOT NULL,
    `state` ENUM('ACCOMPLISHED', 'WORKING', 'COMING') NOT NULL DEFAULT 'COMING',
    `category` ENUM('ART', 'SCIENCE', 'TECHNOLOGY', 'SOCIAL') NOT NULL DEFAULT 'SOCIAL',
    `storyContentId` INTEGER NOT NULL,

    UNIQUE INDEX `Project_storyContentId_unique`(`storyContentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Idea` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `abstract` VARCHAR(191) NOT NULL,
    `introductoryQuestion` VARCHAR(191) NOT NULL,
    `cover` VARCHAR(191) NOT NULL,
    `category` ENUM('ARTICLE', 'ESSAY', 'STATE') NOT NULL DEFAULT 'STATE',
    `storyContentId` INTEGER NOT NULL,

    UNIQUE INDEX `Idea_storyContentId_unique`(`storyContentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StoryContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `whyNeeded` VARCHAR(191),
    `whyJuno` VARCHAR(191),
    `pilar` ENUM('SCIENCE', 'ART', 'TECHNOLOGY') NOT NULL DEFAULT 'TECHNOLOGY',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Study` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `whyNeeded` VARCHAR(191),
    `experience` VARCHAR(191),
    `state` ENUM('MASTERED', 'LEARNING') NOT NULL DEFAULT 'MASTERED',
    `pilar` ENUM('SCIENCE', 'ART', 'TECHNOLOGY') NOT NULL DEFAULT 'TECHNOLOGY',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PartnerToProject` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PartnerToProject_AB_unique`(`A`, `B`),
    INDEX `_PartnerToProject_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ServiceToStudy` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ServiceToStudy_AB_unique`(`A`, `B`),
    INDEX `_ServiceToStudy_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Partner` ADD FOREIGN KEY (`beingId`) REFERENCES `Being`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Credential` ADD FOREIGN KEY (`beingId`) REFERENCES `Being`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`storyContentId`) REFERENCES `StoryContent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Idea` ADD FOREIGN KEY (`storyContentId`) REFERENCES `StoryContent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PartnerToProject` ADD FOREIGN KEY (`A`) REFERENCES `Partner`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PartnerToProject` ADD FOREIGN KEY (`B`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ServiceToStudy` ADD FOREIGN KEY (`A`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ServiceToStudy` ADD FOREIGN KEY (`B`) REFERENCES `Study`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
