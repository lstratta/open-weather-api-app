#!/bin/sh

cd /var/lib/jenkins/workspace/OpenWeatherApp

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

. ~/.nvm/nvm.sh

nvm install --lts

npm install

npm install -g pm2

pm2 kill

pm2 start server.js -f

exit