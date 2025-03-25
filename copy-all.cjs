// copy-all.cjs
const fse = require("fs-extra");
const path = require("path");

async function copyProject(projectName) {
  const source = path.join(__dirname, projectName, "dist");
  const target = path.join(__dirname, "dist", "projects", projectName);

  await fse.ensureDir(target);

  await fse.copy(
    path.join(source, "index.html"),
    path.join(target, "index.html")
  );
  await fse.copy(path.join(source, "assets"), path.join(target, "assets"));

  console.log(`✅ Copied ${projectName}`);
}

async function main() {
  await copyProject("newstar");
  await copyProject("prolog");
}

main();
