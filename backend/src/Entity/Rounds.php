<?php

namespace App\Entity;

use App\Repository\RoundsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoundsRepository::class)]
class Rounds
{
    #[ORM\Id]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $start_at = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $end_at = null;

    /**
     * @var Collection<int, Calendar>
     */
    #[ORM\OneToMany(mappedBy: 'round_id', targetEntity: Calendar::class)]
    private Collection $round;

    public function __construct()
    {
        $this->round = new ArrayCollection();
    }

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

    public function getStartAt(): ?\DateTimeInterface
    {
        return $this->start_at;
    }

    public function setStartAt(\DateTimeInterface $start_at): static
    {
        $this->start_at = $start_at;

        return $this;
    }

    public function getEndAt(): ?\DateTimeInterface
    {
        return $this->end_at;
    }

    public function setEndAt(\DateTimeInterface $end_at): static
    {
        $this->end_at = $end_at;

        return $this;
    }

    /**
     * @return Collection<int, Calendar>
     */
    public function getRound(): Collection
    {
        return $this->round;
    }

    public function addRound(Calendar $round): static
    {
        if (!$this->round->contains($round)) {
            $this->round->add($round);
            $round->setRoundId($this);
        }

        return $this;
    }

    public function removeRound(Calendar $round): static
    {
        if ($this->round->removeElement($round)) {
            // set the owning side to null (unless already changed)
            if ($round->getRoundId() === $this) {
                $round->setRoundId(null);
            }
        }

        return $this;
    }
}
