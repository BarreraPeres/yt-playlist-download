import { readdir } from "node:fs/promises"
import { unlink } from "node:fs/promises"
import path from "node:path"
import { dirname } from "../dirname.js"

export async function excludeDownloadMp3() {

    try {
        const files = await readdir("./src/downloads/")

        const mp3Files = files.filter((file) => file.endsWith(".mp3"))

        for (const file of mp3Files) {
            const filepath = path.resolve("./src/downloads/" + file)
            await unlink(filepath)
            console.log("Arquivo Excluido: ", file)
        }
    } catch (e) {
        console.log(e)
    }
}