#!/usr/bin/env bash
path=$(node /home/nika/Desktop/local-singular/terminal-path-manager/index.js $@)

if [[ $1 = "search" ]]
    then path=$(printf "$path\n$(find ~/Desktop -mindepth 1 -maxdepth 2 -type d)" | fzf)
fi

if [[ $path = /* ]]
    then 
        cd $path
    else
        echo "$path"
fi

$SHELL
exit 1