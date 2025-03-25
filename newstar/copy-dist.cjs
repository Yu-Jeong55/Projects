// copy-dist.js
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

const distPath = path.join(__dirname, "dist");
const targetPath = path.join(distPath, "projects", "newstar");

async function copyBuild() {
  await fse.ensureDir(targetPath);

  // 개별 파일 복사
  await fse.copy(
    path.join(distPath, "index.html"),
    path.join(targetPath, "index.html")
  );
  await fse.copy(
    path.join(distPath, "404.html"),
    path.join(targetPath, "404.html")
  );

  // 폴더 복사
  await fse.copy(
    path.join(distPath, "assets"),
    path.join(targetPath, "assets")
  );

  console.log("✅ Build copied to dist/projects/newstar/");
}

copyBuild();
