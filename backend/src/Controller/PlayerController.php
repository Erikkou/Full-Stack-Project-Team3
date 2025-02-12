<?php

namespace App\Controller;

use App\Entity\Player;
use App\Entity\Team;
use App\Utils\ApiClient;
use App\Utils\Position;
use Doctrine\ORM\EntityManagerInterface;
use Monolog\Handler\Curl\Util;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class PlayerController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly ApiClient $client,
    ) {
    }

    #[Route('/api/players', name: 'get_players', methods: ['GET'])]
    public function getPlayers(): JsonResponse
    {
        // Haal het team op door de naam te matchen met het 'name' veld in je database
//        $teamEntity = $this->entityManager->getRepository(Team::class)->findOneBy(['id' => $team]);
//        if (!$teamEntity) {
//            return new JsonResponse(['status' => 'error', 'message' => 'Team not found'], 404);
//        }


        // Haal de spelers op die aan dit team gekoppeld zijn
        $players = $this->entityManager->getRepository(Player::class)->findAll();

        $data = [];
        foreach ($players as $player) {
            $position = match ($player->getPositionId()) {
                24 => Position::GOALKEEPER,
                25 => Position::DEFENDER,
                26 => Position::MIDFIELDER,
                27 => Position::ATTACKER,
                28 => Position::UNKNOWN,
                default => null,
            };

            $data[] = [
                'id' => $player->getId(),
                'name' => $player->getName(),
                'display_name' => $player->getDisplayName(),
                'team' => $player->getTeam()->getName(),
                'jersey_number' => $player->getJerseyNumber(),
                'position' => $position,
                'detailed_position_id' => $player->getDetailedPositionId(),
                'price' => $player->getPrice(),
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/api/players/{id}', name: 'get_player', methods: ['GET'])]
    public function getPlayer(int $id): JsonResponse
    {
        $player = $this->entityManager->getRepository(Player::class)->find($id);

        if (!$player) {
            return new JsonResponse(['message' => 'Player not found'], Response::HTTP_NOT_FOUND);
        }

        $position = match ($player->getPositionId()) {
            24 => Position::GOALKEEPER,
            25 => Position::DEFENDER,
            26 => Position::MIDFIELDER,
            27 => Position::ATTACKER,
            28 => Position::UNKNOWN,
            default => null,
        };

        return new JsonResponse([
            'id' => $player->getId(),
            'name' => $player->getName(),
            'display_name' => $player->getDisplayName(),
            'team' => $player->getTeam()->getName(),
            'jersey_number' => $player->getJerseyNumber(),
            'position_id' => $position,
            'detailed_position_id' => $player->getDetailedPositionId(),
            'price' => $player->getPrice(),
        ]);
    }

    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    #[Route('/api/players/save/{team}', name: 'save_players')]
    public function savePlayers(string $team, EntityManagerInterface $em)
    {
        $teamEntity = $em->getRepository(Team::class)->find($team);

        if (!$teamEntity) {
            return new JsonResponse(['status' => 'error', 'message' => 'Team not found'], 404);
        }

        $response = $this->client->request('teams/' . $team, ['include' => 'players.player']);

        foreach ($response['data']['players'] as $players) {
            $playerId = $players['player']['id'];
            $existingMatch = $em->getRepository(Player::class)->find($playerId);
            if ($existingMatch) {
                return new JsonResponse(
                    ['status' => 'Exists', 'message' => sprintf('%s Players are already set', $teamEntity->getName()),],
                );
            }

            $player = new Player();
            $player->setId($playerId)
                ->setName($players['player']['name'])
                ->setDisplayName($players['player']['display_name'])
                ->setTeam($teamEntity)
                ->setJerseyNumber($players['jersey_number'])
                ->setDetailedPositionId($players['player']['detailed_position_id'])
                ->setPositionId($players['player']['position_id']);
            $em->persist($player);
        }

        $em->flush();

        return new JsonResponse(
            ['status' => 'success', 'message' => $teamEntity->getName() . ' players have been saved']
        );
    }
}
