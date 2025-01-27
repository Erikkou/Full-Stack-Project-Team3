## Vereisten

Zorg ervoor dat je de volgende software geïnstalleerd hebt:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Project Setup

Volg de onderstaande stappen om het project op te zetten en te draaien:

### 1 Clone het project


- git clone https://github.com/Erikkou/FS-Project-Team-3.git
- cd FS-Project-Team-3/

### 2 Bouw en start de containers

- docker compose build
- docker compose up -d

### 3 Controleer of de containers draaien

- docker ps

Je zou drie containers moeten zien: symfony_app, react_app, en mariadb.


### 4 Toegang tot de applicatie

- Symfony backend: http://localhost:9000
- React frontend: http://localhost:3000


### Belangrijke commando's

Containers stoppen:
- docker compose down


Containers opnieuw opbouwen:
- docker compose build
- docker compose up -d

Veranderingen weergeven in frontend:
- docker-compose restart frontend

Logs bekijken:
- docker compose logs <container_name>


Een container binnenkomen:
-docker exec -it <container_name> /bin/bash


### Environment Variables
Zorg ervoor dat je een .env bestand hebt in de backend directory met de volgende inhoud:

APP_ENV=dev
APP_DEBUG=1
APP_SECRET=your_secret_key


### Composer Dependencies
Als je nieuwe PHP dependencies toevoegt zorg ervoor dat je de volgende commando's uitvoert:
- docker compose run --rm backend composer install


### Problemen oplossen
Als je problemen ondervindt controleer dan de logs van de containers:
- docker compose logs


### Problemen met bestandsrechten

Controleer de rechten van je projectdirectory (op je hostmachine) en zorg ervoor dat deze volledig toegankelijk is voor de Docker container, ga naar je projectmap en voer het volgende commando uit::

sudo chmod -R 777 .

### Data base commando's
php bin/console doctrine:database:drop --force

php bin/console doctrine:database:create

php bin/console make:migration

php bin/console doctrine:migrations:migrate

php bin/console doctrine:schema:update --force


rm -rf migrations/*

php bin/console doctrine:schema:validate


php bin/console doctrine:migrations:diff

mariadb-dump -u myuser -p mydatabase > database_dump.sql

docker cp mariadb:/tmp/database_dump.sql ./database_dump.sql

