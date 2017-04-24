#!/bin/bash

YELLOW='\033[0;33m'
GREEN='\033[0;32m'
NC='\033[0m'

printf "${YELLOW}Cloning code from https://github.com/mrZizik/ds_chat${NC}\n"
rm -rf ds_chat
git clone https://github.com/mrZizik/ds_chat
printf "Cloning: [${GREEN}OK${NC}]\n"


printf "${YELLOW}Docker image back is building.${NC}\n"
cd ds_chat/back
docker stop back || true
docker rm --force back || true
docker rmi --force mrzizik/back || true
docker build -t mrzizik/back .
docker push mrzizik/back
printf "Back: [${GREEN}OK${NC}]\n"


printf "${YELLOW}Docker image front is building.${NC}\n"
cd ../front
docker stop front || true
docker rm --force front || true
docker rmi --force mrzizik/front || true
docker build -t mrzizik/front .
docker push mrzizik/front
printf "Front: [${GREEN}OK${NC}]\n"

printf "${YELLOW}Pushing docker compose.${NC}\n"
cd ..
scp docker-compose.yml a_abdulmadzhidov@35.187.162.188:/home/a_abdulmadzhidov/docker-compose.yml
ssh a_abdulmadzhidov@35.187.162.188 << EOF
sudo curl -o /usr/local/bin/docker-compose -L https://github.com/docker/compose/releases/download/1.11.2/docker-compose-
$(uname -s)-$(uname -m)
sudo chmod +x /usr/local/bin/docker-compose
docker-compose up





