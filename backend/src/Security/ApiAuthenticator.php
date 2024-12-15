<?php

namespace App\Security;

use Lexik\Bundle\JWTAuthenticationBundle\Security\Authenticator\JwtAuthenticator as BaseJwtAuthenticator;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

class ApiAuthenticator extends BaseJwtAuthenticator
{
    public function supports(Request $request): ?bool
    {
        return $request->headers->has('Authorization');
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): JsonResponse
    {
        return new JsonResponse(['error' => 'Authentication failed'], 401);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?\Symfony\Component\HttpFoundation\Response
    {
        return null;
    }
}
