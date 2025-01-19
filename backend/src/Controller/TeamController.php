<?php

namespace App\Controller;

use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TeamController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $entityManager)
    {
    }

    #[Route('/api/teams', name: 'get_teams', methods: ['GET'])]
    public function getTeams(): JsonResponse
    {
        $teams = $this->entityManager->getRepository(Team::class)->findAll();

        $data = [];
        foreach ($teams as $team) {
            $data[] = [
                'id' => $team->getId(),
                'name' => $team->getName(),
                'logo' => $this->generateLogoUrl($team->getId()),
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/api/teams/{id}', name: 'get_team', methods: ['GET'])]
    public function getTeam(int $id): JsonResponse
    {
        $team = $this->entityManager->getRepository(Team::class)->find($id);

        if (!$team) {
            return new JsonResponse(['message' => 'Team not found'], Response::HTTP_NOT_FOUND);
        }

        return new JsonResponse([
            'id' => $team->getId(),
            'name' => $team->getName(),
            'logo' => $this->generateLogoUrl($team->getId()),
        ]);
    }

    private function generateLogoUrl(int $teamId): string
    {
        return $this->getParameter('kernel.project_dir') . "/public/teams/{$teamId}.png";
    }

}
