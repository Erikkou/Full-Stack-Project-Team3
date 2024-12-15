<?php

namespace App\Controller;

use App\Entity\Player;
use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PlayerController extends AbstractController
{
    #[Route('/api/player', name: 'player_list', methods: ['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $teams = $entityManager->getRepository(Team::class)->findBy(['user' => $user]);
        $teamIds = array_map(fn($team) => $team->getId(), $teams);

        $players = $entityManager->getRepository(Player::class)->findBy(['team' => $teamIds]);

        $data = array_map(fn($player) => [
            'id' => $player->getId(),
            'playerName' => $player->getPlayerName(),
            'team' => [
                'id' => $player->getTeam()->getId(),
                'name' => $player->getTeam()->getTeamName(),
            ],
        ], $players);

        return new JsonResponse($data, Response::HTTP_OK);
    }

    #[Route('/api/player', name: 'player_new', methods: ['POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $data = json_decode($request->getContent(), true);

        if (!isset($data['playerName'], $data['teamId'])) {
            return new JsonResponse(['error' => 'Player name and team are required.'], Response::HTTP_BAD_REQUEST);
        }

        $team = $entityManager->getRepository(Team::class)->find($data['teamId']);

        if (!$team || $team->getUser() !== $user) {
            return new JsonResponse(['error' => 'Team not found or access denied.'], Response::HTTP_FORBIDDEN);
        }

        $player = new Player();
        $player->setPlayerName($data['playerName']);
        $player->setTeam($team);

        $entityManager->persist($player);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Player successfully created.', 'playerId' => $player->getId()], Response::HTTP_CREATED);
    }

    #[Route('/api/player/{id}', name: 'player_delete', methods: ['DELETE'])]
    public function delete(int $id, EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $player = $entityManager->getRepository(Player::class)->find($id);

        if (!$player || $player->getTeam()->getUser() !== $user) {
            return new JsonResponse(['error' => 'Player not found or access denied.'], Response::HTTP_FORBIDDEN);
        }

        $entityManager->remove($player);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Player successfully deleted.'], Response::HTTP_OK);
    }
}
