#!/bin/sh

whoami

cd /var/lib/jenkins/workspace/OpenWeatherApp

# nvm install --lts

npm install --production

npm install pm2 -g

pm2 kill

pm2 start backend/server/server.js --watch

    

   