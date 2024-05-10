import fs from "fs";
import path from "path";

function copyFolderRecursiveSync(source: string, target: string) {
    const files = fs.readdirSync(source);

    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }

    files.forEach((file) => {
        const currentSource = path.join(source, file);
        const currentTarget = path.join(target, file);

        if (fs.statSync(currentSource).isDirectory()) {
            copyFolderRecursiveSync(currentSource, currentTarget);
        } else {
            fs.copyFileSync(currentSource, currentTarget);
        }
    });
}

function execute(source: string, target: string) {
    console.log(`Copying files to ${target}...`);
    copyFolderRecursiveSync(source, target);
    console.log(`Copying to ${target} complete.`);
}

execute("./template", ".");
