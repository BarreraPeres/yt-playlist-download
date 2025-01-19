import { mkdir } from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";

export async function createFolder() {
    try {
        let folder;
        if (!fs.existsSync("./src/downloads/")) {
            folder = await mkdir("./src/downloads/", { recursive: true })
        } else {
            folder = path.join(process.cwd(), "src", "downloads")
        }

        await fs.promises.access(folder, fs.constants.W_OK);

        return folder
    } catch (err) {
        console.log(err)
        throw err
    }
}