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
    "cd <path>",
    "cd to destination",
    () => {},
    (argv) => console.log(services.getAllPaths()[argv.path] || "Path not found")
  )
  .command(
    ["search", "s"],
    "using fuzzy search to finding path from the list and after that cd to destination",
    () => {},
    () => {
      // this is here because index.sh is caching 'search' and 's' and handling them there
      // if I dont have this here, terminal will have log that 'search' is not a command or 's' is not a command
    }
  )
  .demandCommand()
  // .command("--get-completions [cmd] [current]", false, {}, async (argv) => {
  //   const completions = await services.generateCompletions(
  //     argv.current || "",
  //     argv
  //   );
  //   console.log(completions.join(" "));
  //   process.exit(0);
  // })
  // // Command to set up completion
  // .command("setup-completion", "Set up command completion", {}, async () => {
  //   await services.setupCompletion();
  // })
  .strict()
  .parse();
