const fs = require("node:fs");
const path = require("node:path");

const getAllPaths = () =>
  JSON.parse(fs.readFileSync(__dirname + "/paths.json", "utf8"));

const writePaths = (paths) =>
  fs.writeFileSync(__dirname + "/paths.json", JSON.stringify(paths));

const getFullPaths = () =>
  Object.values(getAllPaths()).forEach((path) => console.log(path));

const logPaths = () => {
  const paths = getAllPaths();
  console.log("pathanme -> destination");
  console.log("----------------------");
  for (const path in paths) {
    console.log(`${path} -> ${paths[path]}`);
  }
};

const addPath = (pathname, destincation) => {
  const paths = getAllPaths();

  if (paths[pathname]) {
    console.log("Path already exists, try tpm change <name> <new path>");
    return;
  }

  paths[pathname] = destincation;

  writePaths(paths);
  console.log("Path added successfully");
};

const changePath = (pathname, destincation) => {
  const paths = getAllPaths();

  if (!paths[pathname]) {
    console.log("Path does not exist, try tpm add <name> <path>");
    return;
  }

  paths[pathname] = destincation;

  writePaths(paths);
  console.log("Path changed successfully");
};

const removePath = (pathname) => {
  const paths = getAllPaths();

  if (pathname === "all") {
    writePaths({});
    console.log("All paths removed successfully");
    return;
  }

  if (!paths[pathname]) {
    console.log("Path does not exist, try tpm add <name> <path>");
    return;
  }

  delete paths[pathname];

  writePaths(paths);
  console.log("Path removed successfully");
};

// function getStoredNames() {
//   try {
//     const jsonPath = path.join(__dirname, "paths.json");
//     const data = fs.readFileSync(jsonPath, "utf8");
//     return JSON.parse(data);
//   } catch (error) {
//     console.error("Error reading names:", error);
//     return {};
//   }
// }

// // Function to generate completion based on the current input
// function generateCompletions(current, argv) {
//   const storedData = getStoredNames();
//   const names = Object.keys(storedData);

//   // If we're completing for the 'cd' command and there's a partial name
//   if (argv && argv._ && argv._[0] === "cd") {
//     return names.filter((name) => name.includes(current));
//   }

//   // Default command completion
//   const commands = ["add", "remove", "cd", "search", "change", "ls"];
//   return commands.filter((cmd) => cmd.startsWith(current));
// }

// // Completion script setup
// function setupCompletion() {
//   const completionScript = `
// ###-begin-tpm-completions-###
// function _tpm_completions() {
//   local cur="${"${COMP_WORDS[COMP_CWORD]}"}"
//   local cmd="${"${COMP_WORDS[1]}"}"

//   # Get completion suggestions from the CLI tool itself
//   if [ "$cmd" = "cd" ]; then
//       COMPREPLY=( $(compgen -W "$(tpm --get-completions cd "$cur")" -- "$cur") )
//   else
//       COMPREPLY=( $(compgen -W "$(tpm --get-completions)" -- "$cur") )
//   fi
//   return 0
// }

// complete -F _tpm_completions tpm
// ###-end-tpm-completions-###
// `;

//   // Write completion script to user's home directory
//   const completionPath = path.join(process.env.HOME, ".tpm-completion.bash");

//   fs.writeFileSync(completionPath, completionScript);
//   // Instructions for the user
//   console.log(`
// Autocomplete has been set up!
// Please add the following line to your ~/.bashrc or ~/.zshrc:
// source ~/.tpm-completion.bash

// Then restart your terminal or run:
// source ~/.bashrc  # or source ~/.zshrc
// `);
// }

module.exports = {
  getAllPaths,
  logPaths,
  addPath,
  changePath,
  removePath,
  getFullPaths,
  // generateCompletions,
  // setupCompletion,
};
