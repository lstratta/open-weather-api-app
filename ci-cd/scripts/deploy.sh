#!/bin/sh

bash <<EOF 

    #!/bin/sh

    cd /home/ubuntu/app/open-weather-api-app

    pwd

    sudo git pull origin main

    sudo nvm install --lts

    sudo npm install --production

    sudo npm install pm2 -g

    pm2 kill

    pm2 start backend/server/server.js --watch

EOF
/etc/sudoers.d/