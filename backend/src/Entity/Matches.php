<?php

namespace App\Entity;

use App\Repository\MatchesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MatchesRepository::class)]
class Matches
{
    #[ORM\Id]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?string $starting_at = null;

    #[ORM\Column(length: 255)]
    private ?string $end_result_info = null;

    #[ORM\Column]
    private ?int $stage_id = null;

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

    public function getStartingAt(): ?string
    {
        return $this->starting_at;
    }

    public function setStartingAt(string $starting_at): static
    {
        $this->starting_at = $starting_at;

        return $this;
    }

    public function getEndResultInfo(): ?string
    {
        return $this->end_result_info;
    }

    public function setEndResultInfo(string $end_result_info): static
    {
        $this->end_result_info = $end_result_info;

        return $this;
    }

    public function getStageId(): ?int
    {
        return $this->stage_id;
    }

    public function setStageId(int $stage_id): static
    {
        $this->stage_id = $stage_id;

        return $this;
    }
}
