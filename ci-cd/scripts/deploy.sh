#!/bin/sh

export env.BUILD_ID=dontKillMePlease

whoami

cd /var/lib/jenkins/workspace/OpenWeatherApp

# nvm install --lts

npm install --production

npm install -g pm2

pm2 restart backend/server/server.js