#!/bin/bash

YELLOW='\033[0;33m'
GREEN='\033[0;32m'
NC='\033[0m'

if [[ "$(docker images -q litleleprikon/front 2> /dev/null)" == "" ]]; then
	printf "${YELLOW}Docker image litleleprikon/front is not found\nBuilding it.${NC}\n"
	pushd front
	rm -rf build
	curl https://github.com/litleleprikon/ds_chat/releases/download/alpha/build.tar.gz
	tar -xzf build.tar.gz
	docker build -t litleleprikon/front .
	popd
fi

printf "Front: [${GREEN}OK${NC}]\n"

if [[ "$(docker images -q litleleprikon/back 2> /dev/null)" == "" ]]; then
	printf "${YELLOW}Docker image litleleprikon/back is not found\nBuilding it.${NC}\n"
	pushd back
	docker build -t litleleprikon/back .
	popd
fi

printf "Back: [${GREEN}OK${NC}]\n"