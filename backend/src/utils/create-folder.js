import { mkdir } from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";

export async function createFolder() {
    let folder;
    if (!fs.existsSync("./src/downloads/")) {
        folder = await mkdir("./src/downloads/", { recursive: true })
    } else {
        folder = path.join(process.cwd(), "src", "downloads")
    }

    return folder
}