-- CreateTable
CREATE TABLE `CurrentStudy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studyId` INTEGER NOT NULL,
    `progress` INTEGER NOT NULL DEFAULT 50,

    UNIQUE INDEX `CurrentStudy_studyId_unique`(`studyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CurrentStudy` ADD FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
