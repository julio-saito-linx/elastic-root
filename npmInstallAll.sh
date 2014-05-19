#!/usr/bin/env bash

sudo npm i -g grunt-cli
sudo npm i -g bower


echo "1-player:"
(cd 1-player && sudo npm i && bower i)
echo ""

echo "2-elastic-mp3-searcher:"
(cd 2-elastic-mp3-searcher && sudo npm i && bower i)
echo ""

echo "3-socketServer:"
(cd 3-socketServer && sudo npm i && bower i)
echo ""

echo "4-mp3Server:"
(cd 4-mp3Server && sudo npm i)
echo ""