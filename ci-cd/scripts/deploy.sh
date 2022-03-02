#!/bin/sh

ssh -i ~/.ssh/pop-os-deploy-server.pem ubuntu@18.133.60.243 << 'ENDSSH'
	
	source ~/.nvm/nvm.sh	
	pm2 stop openweather
	cd projects
	rm -rf open-weather-api-app
	git clone git@github.com:lstratta/open-weather-api-app.git
	cd open-weather-api-app/frontend 
	npm install
	cd ..
	npm i
	cd backend 
	npm install
	pm2 start openweather
	exit

ENDSSH

