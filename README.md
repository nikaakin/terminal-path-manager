 <div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >Terminal path manager</h1>
</div>

---

Terminal path manager `tpm` is a tool that helps you to manage your terminal paths. It is a simple tool that allows you to add, change, remove, and list your paths. After adding the path you can use it in your terminal by typing `tpm cd <path-name>` or search the desired path with fuzzy finder `tpm search`.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)

#

### Prerequisites

- *npm@9.5 and up*
- _nodejs@16 and up_

#

### Tech Stack

- [Node.js](https://nodejs.org/en) - Node.js® is an open-source, cross-platform JavaScript runtime environment.

- [yargs](https://www.npmjs.com/package/yargs) - Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

- [fuzzyfinder](https://github.com/junegunn/fzf) - It's an interactive Unix filter for command-line that can be used with any list; files, command history, processes, hostnames, bookmarks, git commits, etc.

#

### Getting Started

1\. First of all you need to clone repository from github:

```sh
git git@github.com:nikaakin/terminal-path-manager.git
```

2\. Install dependencies:

```sh
npm install
```

3\. install fuzzy finder if you don't have it yet. See instructions in readme:

- https://github.com/junegunn/fzf.

4\. Update path to the node index.js file in `change_dir.sh` file:

```sh
path=$(node /home/user/Desktop/nodejs/terminal-path-manager/index.js $@)
```

- instead of `/home/user/Desktop/nodejs/terminal-path-manager/index.js` you should put your path to the index.js file.

5\. Update `change_dir.sh` paths output for fuzzy finder. If you only want to search through the paths you have added with cli then remove:

- `$(find ~/Desktop -mindepth 1 -maxdepth 2 -type d)`

Or adjust `find` script for your needs:

```sh
if [[$1 = "search"]]
  then path=$(printf "$path\n$(find ~/Desktop -mindepth 1 -maxdepth 2 -type d)" | fzf)
fi
```

6\. Make a link globally to this command:

```sh
sudo npm link
```

#

### Usage

```sh
tpm <command> [arguments]
```

#### Registering path correctly:

- ##### _Every registered path should start with / (from root)!!_

#### Commands:

- `add` - Add new path to your terminal
- `change` - Change existing path
- `remove` - Remove existing path
- `ls` - List all paths
- `help` - Show help
- `remove all` - Remove all paths
- `cd` - cd to path
- `search` - Search path with fuzzy finder

#### Examples:

- `tpm add <path-name> <path>` - Add new path to your terminal
- `tpm change <path-name> <path>` - Change existing path
- `tpm remove <path-name>` - Remove existing path
- `tpm ls` - List all paths
- `tpm help` - Show help
- `tpm remove all` - Remove all paths
- `tpm cd <path-name>` - cd to path
- `tpm search` - Search path with fuzzy finder
