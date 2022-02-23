#!/bin/sh

cd /home/ubuntu/app/open-weather-api-app

git pull origin main

nvm install --lts

sudo npm install --production

sudo npm install pm2 -g

sudo pm2 kill

sudo pm2 start backend/server/server.js --watch