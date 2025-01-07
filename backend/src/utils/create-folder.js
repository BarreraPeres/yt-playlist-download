import { mkdir } from "node:fs/promises";
import fs from "node:fs";

export async function createFolder() {
    let folder;
    if (!fs.existsSync("./src/downloads/")) {
        folder = await mkdir("./src/downloads/", { recursive: true })
    } else {
        folder = "./src/downloads/"
    }

    return folder
}