const fs = require("fs");
const packageJson = require("./package.json");

const currentVersion = packageJson.version;
let [major, minor, patch] = currentVersion.split(".");
major = String(parseInt(major));
minor = String(parseInt(minor));
patch = String(parseInt(patch));

let newVersion = "";

if (patch === "9") {
  let newPatch = "0";
  let newMinor = String(parseInt(minor) + 1);
  let newMajor = major;

  if (newMinor > "9") {
    newMinor = "0";
    newMajor = String(parseInt(major) + 1);
  }

  newVersion = `${newMajor}.${newMinor}.${newPatch}`;
} else {
  let newPatch = String(parseInt(patch) + 1);
  let newMinor = minor;
  let newMajor = major;

  newVersion = `${newMajor}.${newMinor}.${newPatch}`;
}

if (newVersion !== currentVersion) {
  packageJson.version = newVersion;
  fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
  console.log(`Version updated to ${newVersion}`);
} else {
  console.log("No version update required");
}
