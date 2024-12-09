<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{
    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request                     $request,
        UserPasswordHasherInterface $passwordHasher,
        EntityManagerInterface      $entityManager
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Controleer of verplichte velden aanwezig zijn
        if (!isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
            return new JsonResponse(['message' => 'Username, email, and password are required'], Response::HTTP_BAD_REQUEST);
        }

        // Controleer of de gebruiker al bestaat op basis van email of username
        $existingEmail = $entityManager->getRepository(User::class)->findOneBy(['email' => $data['email']]);
        $existingUsername = $entityManager->getRepository(User::class)->findOneBy(['username' => $data['username']]);
        if ($existingEmail) {
            return new JsonResponse(['message' => 'Email is already in use'], Response::HTTP_CONFLICT);
        }
        if ($existingUsername) {
            return new JsonResponse(['message' => 'Username is already in use'], Response::HTTP_CONFLICT);
        }

        // Maak een nieuwe gebruiker
        $user = new User();
        $user->setUsername($data['username']);
        $user->setEmail($data['email']);
        $user->setRoles(['ROLE_USER']); // Standaardrol
        $user->setPassword($passwordHasher, $data['password']);

        // Sla de gebruiker op in de database
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse(['message' => 'User successfully registered'], Response::HTTP_CREATED);
    }
}
