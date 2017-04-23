#!/bin/bash

YELLOW='\033[0;33m'
GREEN='\033[0;32m'
NC='\033[0m'

ssh a_abdulmadzhidov@35.187.162.188 << EOF

printf "${YELLOW}Cloning code from https://github.com/mrZizik/ds_chat${NC}\n"
rm -rf ds_chat
git clone https://github.com/mrZizik/ds_chat
printf "Cloning: [${GREEN}OK${NC}]\n"

printf "${YELLOW}Docker image lia/back is building.${NC}\n"
cd ds_chat/back
docker stop back || true
docker rm back || true
docker rmi back || true
docker build -t back .
docker run -d --name back -p 3001:3001 back
printf "Back: [${GREEN}OK${NC}]\n"

printf "${YELLOW}Docker image front is building.${NC}\n"
cd ../front
docker stop front || true
docker rm front || true
docker rmi front || true
docker build -t front .
docker run -d --name front -p 80:80 front
printf "Front: [${GREEN}OK${NC}]\n"

