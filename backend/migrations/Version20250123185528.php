<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250123185528 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE matches (id INT NOT NULL, name VARCHAR(255) NOT NULL, starting_at VARCHAR(255) NOT NULL, end_result_info VARCHAR(255) NOT NULL, stage_id INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE scores (id INT AUTO_INCREMENT NOT NULL, wedstrijd_name VARCHAR(255) NOT NULL, starting_at DATETIME NOT NULL, end_result_info LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE team (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP INDEX IDX_98197A65B842D717 ON player');
        $this->addSql('ALTER TABLE player CHANGE id id INT NOT NULL, CHANGE jersey_number jersey_number INT DEFAULT NULL, CHANGE team_id_id team_id INT NOT NULL');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('CREATE INDEX IDX_98197A65296CD8AE ON player (team_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65296CD8AE');
        $this->addSql('DROP TABLE matches');
        $this->addSql('DROP TABLE scores');
        $this->addSql('DROP TABLE team');
        $this->addSql('DROP INDEX IDX_98197A65296CD8AE ON player');
        $this->addSql('ALTER TABLE player CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE jersey_number jersey_number INT NOT NULL, CHANGE team_id team_id_id INT NOT NULL');
        $this->addSql('CREATE INDEX IDX_98197A65B842D717 ON player (team_id_id)');
    }
}
