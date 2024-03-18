#!/usr/bin/env bash
path=$(node /home/nika/Desktop/local-singular/terminal-path-manager/index.js $@)

if [[ $path = /* ]]
    then 
        cd $path
    else
        echo "$path"
fi
$SHELL
