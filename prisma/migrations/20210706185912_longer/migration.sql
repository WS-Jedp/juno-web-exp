-- AlterTable
ALTER TABLE `Idea` MODIFY `abstract` MEDIUMTEXT NOT NULL;

-- AlterTable
ALTER TABLE `Project` MODIFY `abstract` MEDIUMTEXT,
    MODIFY `description` MEDIUMTEXT NOT NULL;

-- AlterTable
ALTER TABLE `StoryContent` MODIFY `content` LONGTEXT NOT NULL;
