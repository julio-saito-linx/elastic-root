#!/usr/bin/env bash

grunt --base ./1-player/src  --gruntfile ./1-player/src/Gruntfile.js serve &
grunt --base ./2-elastic-mp3-searcher --gruntfile ./2-elastic-mp3-searcher/Gruntfile.js serve &
node ./3-socketServer/app.js &
node ./4-mp3Server/app.js 
&& fg