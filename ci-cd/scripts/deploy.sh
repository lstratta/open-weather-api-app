#!/bin/sh

bash <<EOF 

    #!/bin/sh

    cd /home/ubuntu/app/open-weather-api-app

    git pull origin main

    nvm install --lts

    sudo -S npm install --production

    sudo -S npm install pm2 -g

    sudo -S pm2 kill

    sudo -S pm2 start backend/server/server.js --watch

EOF
