<?php

namespace App\Entity;

use App\Repository\CalendarRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CalendarRepository::class)]
class Calendar
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'away_team')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Team $home_team = null;

    #[ORM\ManyToOne(inversedBy: 'away_team')]
    private ?Team $away_team = null;

    #[ORM\ManyToOne]
    private ?Stadium $stadium_id = null;

    #[ORM\ManyToOne(inversedBy: 'round')]
    private ?Rounds $round_id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $starting_at = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getHomeTeam(): ?Team
    {
        return $this->home_team;
    }

    public function setHomeTeam(?Team $home_team): static
    {
        $this->home_team = $home_team;

        return $this;
    }

    public function getAwayTeam(): ?Team
    {
        return $this->away_team;
    }

    public function setAwayTeam(?Team $away_team): static
    {
        $this->away_team = $away_team;

        return $this;
    }

    public function getStadiumId(): ?Stadium
    {
        return $this->stadium_id;
    }

    public function setStadiumId(?Stadium $stadium_id): static
    {
        $this->stadium_id = $stadium_id;

        return $this;
    }

    public function getRoundId(): ?Rounds
    {
        return $this->round_id;
    }

    public function setRoundId(?Rounds $round_id): static
    {
        $this->round_id = $round_id;

        return $this;
    }

    public function getStartingAt(): ?\DateTimeInterface
    {
        return $this->starting_at;
    }

    public function setStartingAt(\DateTimeInterface $starting_at): static
    {
        $this->starting_at = $starting_at;

        return $this;
    }
}
