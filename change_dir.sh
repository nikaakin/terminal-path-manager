#!/usr/bin/env bash
path=$(node /home/user/Desktop/nodejs/terminal-path-manager/index.js $@)

if [[ $path = /* ]]
    then 
        cd $path
    else
        echo "$path"
fi
$SHELL