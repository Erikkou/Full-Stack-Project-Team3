# when by react container:

Compiled with problems:
ERROR
[eslint] EACCES: permission denied, open '/app/node_modules/.cache/.eslintcache'


### steps:
- docker exec -u root -it react_app bash
- chown -R node:node /app/node_modules/
- exit
- rm -rf node_modules/.cache/.eslintcache
- docker compose build --no-cache
- docker compose up -d

# when error with the symfony container:

### steps:
- docker exec -it symfony_app bash
- composer install
- docker compose down
- docker compose build --no-cache
- docker compose up -d
