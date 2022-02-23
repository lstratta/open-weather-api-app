#!/bin/sh

export BUILD_ID=dontKillMePlease

whoami

cd /var/lib/jenkins/workspace/OpenWeatherApp

# nvm install --lts

npm install --production

npm install -g pm2

pm2 kill

pm2 start backend/server/server.js