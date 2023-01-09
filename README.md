# docker_mongodb
Docker + MongoDB

## Connexion à la db
mongosh admin -u <user> -p <password>
mongosh admin -u us3r -p ap4ssW0rd

https://www.mongodb.com/docs/manual/reference/method/db.auth/

## Création d'un dump de MongoDB
$ docker exec some-mongo sh -c 'exec mongodump -d <database_name> --archive' > /some/path/on/your/host/all-collections.archive

## Installation
`docker compose run client npm install`