# Connected application with node.js and socket.io

## Aim of this project
HTTP being a stateless protocol, does not fulfil most of the real world problems
in an "as is" fashion as they require to persist some sort of state for
authentication or track call sequence to detect request forgery or to maintain
view state (as in asp.net). To address this particular problem various web frameworks
provide a feature called "sessions". Sessions are very import aspect of any web
app today, but there is an inherent a issue with this approach to maintain states;
its quite impossible to put the app behind a load balancer (usually geologically
distributed in nature) without introducing a little bit complicated architecture
to support such a scenario; such sophisticated architecture accompanies with quite
a lot of hardware requirements and hence a lot of moving parts making maintenance
a pain the [DONKEY]. With this project I'll attempt to introduce an approach using
socket.io to maintain states which would be faster, realtime and hopefully more
friendly. I do not claim to have invented any of these "idea" of using socket.io
to maintain states on this server, this is just my attempt to address this problem;
it involves quite a bit of improvisation from the materials, sites, blogs and
endless videos I have referred.

This project is part of a blog at [Odd Code](https://oddcode.daveamit.com)

## How to get started
First of all you'll have to clone the repository using

    git clone git@github.com:daveamit/connected-app-with-node-and-socket-io.git

once the cloning is done go to "connected-app-with-node-and-socket-io/server" folder and run
node, npm, bower must be there before you can run following command. [here](https://docs.npmjs.com/getting-started/installing-node) is a nice video / artical showing how to install node. Once node is installed you can install bower globally using following command
    npm install -g bower
  This will install bower globally, which will enable you to run it as a command from anywhere. Depending on your installation of node, you might need to add 'sudo' like 'sudo npm install -g bower'. Lets install all npm dependencies now to do so execute following command 
  
    cd connected-app-with-node-and-socket-io/server && npm install

This should install all the dependencies. Now you cd in the public folder (i.e. server/public) and install bower

    cd public && bower install

Thats it! You are ready to rock and roll. If you are planning to play with it, you might also want to install 'nodemon' which detects file change and automatically restarts the node app. nodemon can be install from following command line

    sudo npm install -g nodemon

once its installed, just go to 'server' folder and type in

    nodemon
and you are good to go. Fire-up any browser and visit http://localhost:3000 to witness the magic.
