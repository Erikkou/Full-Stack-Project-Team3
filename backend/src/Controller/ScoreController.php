<?php

namespace App\Controller;

use App\Entity\Matches;
use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;

class ScoreController extends AbstractController
{

    public function __construct(
        private readonly EntityManagerInterface $entityManager
    )
    {
    }

    /**
     * @param string $date
     * @return JsonResponse
     * @throws ServerExceptionInterface
     * @throws ClientExceptionInterface
     * @throws RedirectionExceptionInterface
     */
    #[Route('/scores/{date}', name: 'api_scores', methods: ['GET'])]
    public function getScores(string $date): JsonResponse
    {
        $info = [];
        $matches = $this->entityManager->getRepository(Matches::class)->findBy(['starting_at' => $date]);
        foreach ($matches as $match) {
            if ($match->getStageId() === 72) {
                [$home, $away] = explode('vs', $match->getName());
                $wedstrijd_name = sprintf(
                    '%s vs %s',
                    $this->getTeamName(trim($home))->getName() ?? 'Unknown',
                    $this->getTeamName(trim($away))->getName() ?? 'Unknown',
                );

                $info[] = [
                    'id' => $match->getId(),
                    'wedstrijd_name' => $wedstrijd_name,
                    'starting_at' => $match->getStartingAt(),
                    'end_result_info' => $match->getEndResultInfo(),
                ];
            }
        }
        return new JsonResponse($info);
    }

    protected function getTeamName(string $team)
    {
        return $this->entityManager->getRepository(Team::class)->findOneBy(['name' => $team]);

    }

}
