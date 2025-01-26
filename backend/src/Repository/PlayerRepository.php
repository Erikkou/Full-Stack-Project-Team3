<?php

namespace App\Repository;

use App\Entity\Player;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Player>
 */
class PlayerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Player::class);
    }

    /**
     * Vind spelers op basis van een team-ID.
     *
     * @param int $teamId
     * @return Player[]
     */
    public function findPlayersByTeam(int $teamId): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.team = :teamId')
            ->setParameter('teamId', $teamId)
            ->orderBy('p.name', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Vind een speler op basis van de naam (case-insensitive).
     *
     * @param string $name
     * @return Player|null
     */
    public function findPlayerByName(string $name): ?Player
    {
        return $this->createQueryBuilder('p')
            ->andWhere('LOWER(p.name) = :name')
            ->setParameter('name', strtolower($name))
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Vind spelers met caching (optioneel).
     *
     * @param int $teamId
     * @return Player[]
     */
    public function findPlayersByTeamWithCache(int $teamId): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.team = :teamId')
            ->setParameter('teamId', $teamId)
            ->orderBy('p.name', 'ASC')
            ->getQuery()
            ->useResultCache(true, 3600, 'players_by_team_' . $teamId)
            ->getResult();
    }
}
