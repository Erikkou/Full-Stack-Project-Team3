<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;
use App\Kernel;

// Bootstrap the Symfony application
require_once __DIR__ . '/vendor/autoload.php';

// Create the Symfony kernel
$kernel = new Kernel('dev', true);
$kernel->boot();

// Retrieve the EntityManager from the Symfony container
$entityManager = $kernel->getContainer()->get('doctrine.orm.entity_manager');

return ConsoleRunner::createHelperSet($entityManager);