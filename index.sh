#!/usr/bin/env bash
path=$(node /Users/nikatsutskiridze/commands/terminal-path-manager/index.js $@)

# s or search flag

if [[ $1 = "s" || $1 = "search" ]]
    # if you only want to search through the paths you have added with cli remove `$(find ~/Desktop -mindepth 1 -maxdepth 2 -type d)` this
    # or adjust find script for your needs
    then path=$(printf "$path\n$(find ~/commands ~/work ~/job ~/practice ~/Desktop -mindepth 1 -maxdepth 1 -type d -not -name '.*')" | fzf)
fi


if [[ $path = /* ]]
    then 
        cd $path
    else
        echo "$path"
fi

$SHELL
exit 1