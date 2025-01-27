<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Team
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'team', targetEntity: Player::class, cascade: ['persist', 'remove'])]
    private Collection $players;

    /**
     * @var Collection<int, Calendar>
     */
    #[ORM\OneToMany(mappedBy: 'home_team', targetEntity: Calendar::class)]
    private Collection $home_team;
    #[ORM\OneToMany(mappedBy: 'away_team', targetEntity: Calendar::class)]
    private Collection $away_team;
    public function __construct()
    {
        $this->players = new ArrayCollection();
        $this->away_team = new ArrayCollection();
        $this->home_team = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getPlayers(): Collection
    {
        return $this->players;
    }

    public function addPlayer(Player $player): self
    {
        if (!$this->players->contains($player)) {
            $this->players->add($player);
            $player->setTeam($this);
        }
        return $this;
    }

    public function removePlayer(Player $player): self
    {
        if ($this->players->removeElement($player)) {
            if ($player->getTeam() === $this) {
                $player->setTeam(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, Calendar>
     */
    public function getAwayTeam(): Collection
    {
        return $this->away_team;
    }

    public function addAwayTeam(Calendar $awayTeam): static
    {
        if (!$this->away_team->contains($awayTeam)) {
            $this->away_team->add($awayTeam);
            $awayTeam->setAwayTeam($this);
        }

        return $this;
    }

    public function removeAwayTeam(Calendar $awayTeam): static
    {
        if ($this->away_team->removeElement($awayTeam)) {
            // set the owning side to null (unless already changed)
            if ($awayTeam->getAwayTeam() === $this) {
                $awayTeam->setAwayTeam(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Calendar>
     */
    public function getHomeTeam(): Collection
    {
        return $this->away_team;
    }

    public function addHomeTeam(Calendar $awayTeam): static
    {
        if (!$this->away_team->contains($awayTeam)) {
            $this->away_team->add($awayTeam);
            $awayTeam->setHomeTeam($this);
        }

        return $this;
    }

    public function removeHomeTeam(Calendar $awayTeam): static
    {
        if ($this->away_team->removeElement($awayTeam)) {
            // set the owning side to null (unless already changed)
            if ($awayTeam->getHomeTeam() === $this) {
                $awayTeam->setHomeTeam(null);
            }
        }

        return $this;
    }
}
