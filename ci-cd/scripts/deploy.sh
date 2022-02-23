#!/bin/sh

bash <<EOF 

    #!/bin/sh

    cd /home/ubuntu/app/open-weather-api-app

    pwd

    sudo -S git pull origin main

    sudo -S nvm install --lts

    sudo -S npm install --production

    sudo -S npm install pm2 -g

    pm2 kill

    pm2 start backend/server/server.js --watch

EOF
/etc/sudoers.d/