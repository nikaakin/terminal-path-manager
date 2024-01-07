#!/usr/bin/env node
const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");

yargs(hideBin(process.argv))
  .command(
    "add",
    "add new path to the list",
    (yargs) => {
      console.log("yargs", yargs);
    },
    (argv) => {
      const path = argv;
      console.log("path", path);
    }
  )
  .command(
    "list",
    "list all paths",
    (yargs) => {
      // console.log("yargs", yargs);
    },
    (argv) => {
      const path = argv;
      console.log("/");
    }
  )
  // .command(
  //   "l <path>",
  //   "go to path",
  //   (yargs) => {
  //     console.log("yargs", yargs);
  //   },
  //   (argv) => {
  //     const path = argv;
  //     console.log("path", argv.path);
  //   }
  // )

  .demandCommand()
  .parse();
