const fs = require("node:fs");

const getAllPaths = () => {
  return JSON.parse(fs.readFileSync("./paths.json", "utf8"));
};

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

  fs.writeFileSync("./paths.json", JSON.stringify(paths));
  console.log("Path added successfully");
};

const changePath = (pathname, destincation) => {
  const paths = getAllPaths();

  if (!paths[pathname]) {
    console.log("Path does not exist, try tpm add <name> <path>");
    return;
  }

  paths[pathname] = destincation;

  fs.writeFileSync("./paths.json", JSON.stringify(paths));
  console.log("Path changed successfully");
};

const removePath = (pathname) => {
  const paths = getAllPaths();

  if (!paths[pathname]) {
    console.log("Path does not exist, try tpm add <name> <path>");
    return;
  }

  delete paths[pathname];

  fs.writeFileSync("./paths.json", JSON.stringify(paths));
  console.log("Path removed successfully");
};

const removeAllPaths = () => {
  fs.writeFileSync("./paths.json", JSON.stringify({}));
  console.log("All paths removed successfully");
};

module.exports = {
  getAllPaths,
  logPaths,
  addPath,
  changePath,
  removePath,
  removeAllPaths,
};
