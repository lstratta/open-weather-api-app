#!/bin/sh

whoami

cd /var/lib/jenkins/workspace/OpenWeatherApp

# nvm install --lts

npm install --production

npm install pm2 -g

pm2 kill

env.BUILD_ID=dontKillMePlease

pm2 restart backend/server/server.js