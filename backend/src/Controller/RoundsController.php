<?php

namespace App\Controller;

use App\Entity\Rounds;
use App\Utils\ApiClient;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class RoundsController extends AbstractController
{

    public function __construct(
        private readonly ApiClient $client,
        private readonly EntityManagerInterface $entityManager,

    ) {
    }

    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     * @throws \DateMalformedStringException
     */
    #[
        Route('/api/set/rounds', name: 'set_rounds')]
    public function setRounds(): JsonResponse
    {
        $response = $this->client->request('rounds', ['filters' => 'roundSeasons:23628']);
        foreach ($response['data'] as $round) {
            // Check if the round have been already saved in DB
            $existingRound = $this->entityManager->getRepository(Rounds::class)->find($round['id']);
            if ($existingRound) {
                return new JsonResponse([
                    'status' => 'Exists',
                    'Message' => 'The round have been saved',
                ]);
            }

            $rounds = new Rounds();
            $rounds->setId($round['id'])
                ->setName(sprintf('Round %s', $round['name']))
                ->setStartAt(new \DateTime($round['starting_at']))
                ->setEndAt(new \DateTime($round['ending_at']));
            $this->entityManager->persist($rounds);
        }
        $this->entityManager->flush();
        return new JsonResponse(['status' => 'success', 'message' => 'Rounds have been saved']);
    }

    #[Route('/api/show/rounds', name: 'show_rounds', methods: ['GET'])]
    public function showRounds(): JsonResponse
    {
        $rounds = $this->entityManager->getRepository(Rounds::class)->findAll();
        $data = [];
        foreach ($rounds as $round) {
            $data[] = [
                'id' => $round->getId(),
                'name' => $round->getName(),
                'starting_at' => $round->getStartAt()->format('d-m-Y'),
                'ending_at' => $round->getEndAt()->format('d-m-Y'),
            ];
        }
        return new JsonResponse($data);
    }

    #[Route('/api/show/rounds/week', name: 'show_rounds_week', methods: ['GET'])]
    public function showRoundsPerWeek(): JsonResponse
    {
        $rounds = $this->entityManager->getRepository(Rounds::class)->findAll();
        $data = [];

        // Get the current week's start (Monday) and end (Sunday)
        $weekStart = new \DateTime('monday this week');
        $weekEnd = new \DateTime('sunday this week');
        $weekEnd->setTime(23, 59, 59); // Include the entire day

        foreach ($rounds as $round) {
            $startingAt = $round->getStartAt();
            $endingAt = $round->getEndAt();

            // Check if the round starts or ends within the current week
            if (
                ($startingAt >= $weekStart && $startingAt <= $weekEnd)
            ) {
                $data[] = [
                    'id' => $round->getId(),
                    'name' => $round->getName(),
                    'starting_at' => $startingAt->format('d-m-Y'),
                    'ending_at' => $endingAt->format('d-m-Y'),
                ];
            }
        }

        return new JsonResponse($data);
    }
}
