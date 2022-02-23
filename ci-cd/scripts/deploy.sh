#!/bin/sh

whoami

cd /var/lib/jenkins/workspace/OpenWeatherApp

# nvm install --lts

npm install --production

npm install pm2 -g

pm2 kill

export BUILD_ID=dontKillMePlease

pm2 restart server.js backend/server/server.js