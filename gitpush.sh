#!/usr/bin/env bash

echo "root:"
git add . -A; git commit -m"$*" --amend; git push origin
echo ""

echo "1-player:"
(cd 1-player && git add . -A; git commit -m"$*" --amend; git push origin)
echo ""

echo "2-elastic-mp3-searcher:"
(cd 2-elastic-mp3-searcher && git add . -A; git commit -m"$*" --amend; git push origin)
echo ""

echo "3-socketServer:"
(cd 3-socketServer && git add . -A; git commit -m"$*" --amend; git push origin)
echo ""

echo "4-mp3Server:"
(cd 4-mp3Server && git add . -A; git commit -m"$*" --amend; git push origin)
echo ""

