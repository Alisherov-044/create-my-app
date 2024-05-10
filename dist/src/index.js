import fs from "fs";
import path from "path";
import { Command } from "commander";
const program = new Command();
function copyFolderRecursiveSync(source, target) {
    const files = fs.readdirSync(source);
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }
    files.forEach((file) => {
        const currentSource = path.join(source, file);
        const currentTarget = path.join(target, file);
        if (fs.statSync(currentSource).isDirectory()) {
            copyFolderRecursiveSync(currentSource, currentTarget);
        }
        else {
            fs.copyFileSync(currentSource, currentTarget);
        }
    });
}
function execute(source, target) {
    console.log(`Copying files to ${target}...`);
    copyFolderRecursiveSync(source, target);
    console.log(`Copying to ${target} complete.`);
}
program
    .argument("<string>", "folder to initialize project")
    .action((path) => {
    execute("./template", path);
})
    .description("Initialize project")
    .parse(process.argv);
