#!/usr/bin/env bash

echo "/1-player STATUS"
git --git-dir="1-player/.git" --work-tree="1-player" status
echo ""
echo ""


echo "/2-elastic-mp3-searcher STATUS"
git --git-dir="2-elastic-mp3-searcher/.git" --work-tree="2-elastic-mp3-searcher" status
echo ""
echo ""


echo "/3-socketServer STATUS"
git --git-dir="3-socketServer/.git" --work-tree="3-socketServer" status
echo ""
echo ""


echo "/4-mp3Server STATUS"
git --git-dir="4-mp3Server/.git" --work-tree="4-mp3Server" status
echo ""
echo ""

echo "root"
git status
