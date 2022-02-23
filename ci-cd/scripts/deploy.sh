#!/bin/sh

cd ~/app/open-weather-app

git pull origin main

sudo nvm install --lts

npm install --production

npm install pm2 -g

pm2 kill

pm2 start backend/server/server.js --watch