<?php

namespace App\Controller;

use App\Entity\Team;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

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


    #[Route('/api/teams', name: 'team_new', methods: ['POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $data = json_decode($request->getContent(), true);

        if (!isset($data['teamName'])) {
            return new JsonResponse(['error' => 'Invalid input'], Response::HTTP_BAD_REQUEST);
        }

        $team = new Team();
        $team->setName($data['teamName']);
        $team->setUser($user);

        $entityManager->persist($team);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Team created successfully', 'teamId' => $team->getId()], Response::HTTP_CREATED);
    }

    #[Route('/api/teams/{id}', name: 'team_edit', methods: ['PUT'])]
    public function edit(int $id, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $team = $entityManager->getRepository(Team::class)->find($id);

        if (!$team || $team->getUser() !== $user) {
            throw new AccessDeniedException();
        }

        $data = json_decode($request->getContent(), true);

        if (isset($data['teamName'])) {
            $team->setTeamName($data['teamName']);
        }

        $entityManager->flush();

        return new JsonResponse(['message' => 'Team updated successfully'], Response::HTTP_OK);
    }

    #[Route('/api/teams/{id}', name: 'team_delete', methods: ['DELETE'])]
    public function delete(int $id, EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $team = $entityManager->getRepository(Team::class)->find($id);

        if (!$team || $team->getUser() !== $user) {
            throw new AccessDeniedException();
        }

        $entityManager->remove($team);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Team deleted successfully'], Response::HTTP_OK);
    }

}
