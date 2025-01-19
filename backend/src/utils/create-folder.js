import { mkdir } from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";
import { dirname } from "../dirname.js";

export async function createFolder() {
    try {
        if (!fs.existsSync(dirname)) {
            await mkdir(dirname, { recursive: true })
        }

        await fs.promises.access(dirname, fs.constants.W_OK);

        return dirname
    } catch (err) {
        console.log(err)
        throw err
    }
}