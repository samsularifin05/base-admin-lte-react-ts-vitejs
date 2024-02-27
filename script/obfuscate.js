import fs from "fs";
import path from "path";
import JavaScriptObfuscator from "javascript-obfuscator";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const settings = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  numbersToExpressions: true,
  simplify: true,
  shuffleStringArray: true,
  splitStrings: true,
  stringArray: true,
  //   stringArrayEncoding: "base64",
  stringArrayThreshold: 0.75,
  transformObjectKeys: true,
  unicodeEscapeSequence: true,
};

function obfuscateDir(dirPath) {
  let dirents = fs.readdirSync(dirPath, {
    encoding: "utf8",
    withFileTypes: true,
  });
  for (let i = 0; i < dirents.length; i++) {
    let dirent = dirents[i];
    if (dirent.isDirectory()) {
      obfuscateDir(path.join(dirPath, dirent.name));
      continue;
    }
    if (path.extname(dirent.name) !== ".js") continue;
    const filePath = path.join(dirPath, dirent.name);
    const content = fs.readFileSync(filePath, { encoding: "utf8" });
    const obfuscator = JavaScriptObfuscator.obfuscate(content, settings);
    const obfuscatedCode = obfuscator.getObfuscatedCode();

    fs.writeFileSync(filePath, obfuscatedCode, {
      encoding: "utf8",
      flag: "w+",
    });
    console.log("🤖 🤖 🤖 Done!");
  }
}

obfuscateDir(path.join(__dirname, "../build"));
