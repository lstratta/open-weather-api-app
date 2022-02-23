#!/bin/sh

bash <<EOF 

    #!/bin/sh

    pwd

    git pull origin main

    nvm install --lts

    npm install --production

    npm install pm2 -g &

    pm2 kill

    pm2 start backend/server/server.js --watch

EOF