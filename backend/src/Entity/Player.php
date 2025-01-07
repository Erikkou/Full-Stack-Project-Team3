<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
class Player
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private mixed $id;

    #[ORM\Column(type: 'string', length: 255)]
    private mixed $playerName;

    #[ORM\ManyToOne(targetEntity: Team::class, inversedBy: 'players')]
    #[ORM\JoinColumn(nullable: false)]
    private mixed $team;

    /**
     * @return mixed
     */
    public function getId(): mixed
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId(mixed $id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getPlayerName(): mixed
    {
        return $this->playerName;
    }

    /**
     * @param mixed $playerName
     */
    public function setPlayerName(mixed $playerName): void
    {
        $this->playerName = $playerName;
    }

    /**
     * @return mixed
     */
    public function getTeam(): mixed
    {
        return $this->team;
    }

    /**
     * @param mixed $team
     */
    public function setTeam(mixed $team): void
    {
        $this->team = $team;
    }


// Getters and setters
}