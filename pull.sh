#!/usr/bin/env bash

echo "root:"
git pull
echo ""

echo "1-player:"
(cd 1-player && git pull)
echo ""

echo "2-elastic-mp3-searcher:"
(cd 2-elastic-mp3-searcher && git pull)
echo ""

echo "3-socketServer:"
(cd 3-socketServer && git pull)
echo ""

echo "4-mp3Server:"
(cd 4-mp3Server && git pull)
echo ""

