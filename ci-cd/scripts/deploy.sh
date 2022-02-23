#!/bin/sh

cd /var/lib/jenkins/workspace/OpenWeatherApp

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

. ~/.nvm/nvm.sh

sudo nvm install --lts

npm install

npm install pm2 -g

pm2 kill

pm2 start backend/server/server.js