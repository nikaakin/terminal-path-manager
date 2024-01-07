#!/usr/bin/env bash

path=$(node /home/user/Desktop/nodejs/terminal-path-manager/index.js $1)

if [[ $path = /* ]]
    then 
        cd $path
    else
        echo $path
fi

$SHELL