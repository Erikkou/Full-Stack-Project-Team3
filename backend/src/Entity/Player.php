<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
class Player
{
    #[ORM\Id]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $display_name = null;

    #[ORM\ManyToOne(targetEntity: Team::class, inversedBy: 'players')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Team $team = null;

    #[ORM\Column(nullable: true)]
    private ?int $jersey_number = null;

    #[ORM\Column(nullable: true)]
    private ?int $position_id = null;

    #[ORM\Column(nullable: true)]
    private ?int $detailed_position_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;
        return $this;
    }

    public function getDisplayName(): ?string
    {
        return $this->display_name;
    }

    public function setDisplayName(string $display_name): static
    {
        $this->display_name = $display_name;
        return $this;
    }

    public function getTeam(): ?Team
    {
        return $this->team;
    }

    public function setTeam(?Team $team): self
    {
        $this->team = $team;
        return $this;
    }

    public function getJerseyNumber(): ?int
    {
        return $this->jersey_number;
    }

    public function setJerseyNumber(?int $jersey_number): static
    {
        $this->jersey_number = $jersey_number;
        return $this;
    }

    public function getPositionId(): ?int
    {
        return $this->position_id;
    }

    public function setPositionId(?int $position_id): static
    {
        $this->position_id = $position_id;
        return $this;
    }

    public function getDetailedPositionId(): ?int
    {
        return $this->detailed_position_id;
    }

    public function setDetailedPositionId(?int $detailed_position_id): static
    {
        $this->detailed_position_id = $detailed_position_id;
        return $this;
    }

}
