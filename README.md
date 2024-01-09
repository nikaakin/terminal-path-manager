 <div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >tpm - Terminal path manager</h1>
</div>

---

tpm - Terminal path manager is a tool that helps you to manage your terminal paths. It is a simple tool that allows you to add, change, remove, and list your paths. After adding the path you can use it in your terminal by typing `tpm <path-name>`.

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

#

### Getting Started

1\. First of all you need to clone repository from github:

```sh
git git@github.com:nikaakin/terminal-path-manager.git
```

2\. Install dependencies

```sh
npm install
```

3\. Make a link globally to this command:

```sh
npm link
```

#

### Usage

```sh
tpm <command> [arguments]
```

#### Registering path correctly:

- ##### _Every registered path should start with '/' (from root)!!_

#### Commands:

- `add` - Add new path to your terminal
- `change` - Change existing path
- `remove` - Remove existing path
- `list` - List all paths
- `help` - Show help
- `remove all` - Remove all paths
- `go` - cd to path

#### Examples:

- `tpm add <path-name> <path>` - Add new path to your terminal
- `tpm change <path-name> <path>` - Change existing path
- `tpm remove <path-name>` - Remove existing path
- `tpm list` - List all paths
- `tpm help` - Show help
- `tpm remove all` - Remove all paths
- `tpm go <path-name>` - cd to path
