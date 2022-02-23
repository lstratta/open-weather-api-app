#!/bin/sh

cd ~/app/open-weather-api-app

git pull origin main

nvm install --lts

npm install --production

npm install pm2 -g

pm2 kill

pm2 start backend/server/server.js --watch