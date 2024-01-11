#!/usr/bin/env node
const yargs = require("yargs");
const services = require("./services");

const { hideBin } = require("yargs/helpers");

yargs(hideBin(process.argv))
  .scriptName("tpm")
  .usage("$0 <cmd> [args]")
  .command(
    "ls",
    "list all paths",
    () => {},
    () => services.logPaths()
  )
  .command(
    "add [pathname] [destination]",
    "add new path to the list",
    () => {},
    (argv) => services.addPath(argv.pathname, argv.destination)
  )

  .command(
    "change <pathname> <destination>",
    "change path",
    () => {},
    (argv) => services.changePath(argv.pathname, argv.destination)
  )
  .command(
    "remove <path>",
    "remove path from the list",
    () => {},
    (argv) => {
      services.removePath(argv.path);
    }
  )
  .command(
    "remove all",
    "remove all paths",
    () => {},
    () => services.removeAllPaths()
  )
  .command(
    "cd <path>",
    "cd to destination",
    () => {},
    (argv) => console.log(services.getAllPaths()[argv.path] || "Path not found")
  )
  .demandCommand()
  .parse();
