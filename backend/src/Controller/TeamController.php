<?php

namespace App\Controller;

use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class TeamController extends AbstractController
{
    #[Route('/api/team', name: 'team_list', methods: ['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $teams = $entityManager->getRepository(Team::class)->findBy(['user' => $user]);
        $data = [];

        foreach ($teams as $team) {
            $data[] = [
                'id' => $team->getId(),
                'teamName' => $team->getTeamName(),
// Voeg andere eigenschappen van Team toe indien nodig
            ];
        }

        return new JsonResponse($data, Response::HTTP_OK);
    }

    #[Route('/api/team', name: 'team_new', methods: ['POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $data = json_decode($request->getContent(), true);

        if (!isset($data['teamName'])) {
            return new JsonResponse(['error' => 'Invalid input'], Response::HTTP_BAD_REQUEST);
        }

        $team = new Team();
        $team->setTeamName($data['teamName']);
        $team->setUser($user);

        $entityManager->persist($team);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Team created successfully', 'teamId' => $team->getId()], Response::HTTP_CREATED);
    }

    #[Route('/api/team/{id}', name: 'team_edit', methods: ['PUT'])]
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

    #[Route('/api/team/{id}', name: 'team_delete', methods: ['DELETE'])]
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
