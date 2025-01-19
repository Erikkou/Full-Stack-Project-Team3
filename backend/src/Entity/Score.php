<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'scores')]
class Score
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer', unique: true)]
    private int $id;

    #[ORM\Column(type: 'string', length: 255)]
    private string $wedstrijdName;

    #[ORM\Column(type: 'datetime')]
    private \DateTimeInterface $startingAt;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $endResultInfo;

    public function getId(): int
    {
        return $this->id;
    }

    public function getWedstrijdName(): string
    {
        return $this->wedstrijdName;
    }

    public function setWedstrijdName(string $wedstrijdName): self
    {
        $this->wedstrijdName = $wedstrijdName;
        return $this;
    }

    public function getStartingAt(): \DateTimeInterface
    {
        return $this->startingAt;
    }

    public function setStartingAt(\DateTimeInterface $startingAt): self
    {
        $this->startingAt = $startingAt;
        return $this;
    }

    public function getEndResultInfo(): ?string
    {
        return $this->endResultInfo;
    }

    public function setEndResultInfo(?string $endResultInfo): self
    {
        $this->endResultInfo = $endResultInfo;
        return $this;
    }
}
