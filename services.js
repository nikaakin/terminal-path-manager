const fs = require("node:fs");

const getAllPaths = () =>
  JSON.parse(fs.readFileSync(__dirname + "/paths.json", "utf8"));

const writePaths = (paths) =>
  fs.writeFileSync(__dirname + "/paths.json", JSON.stringify(paths));

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

  if (!paths[pathname]) {
    console.log("Path does not exist, try tpm add <name> <path>");
    return;
  }

  if (pathname === "all") {
    writePaths({});
    console.log("All paths removed successfully");
    return;
  }

  delete paths[pathname];

  writePaths(paths);
  console.log("Path removed successfully");
};

module.exports = {
  getAllPaths,
  logPaths,
  addPath,
  changePath,
  removePath,
};
