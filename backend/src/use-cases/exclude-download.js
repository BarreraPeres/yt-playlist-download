import { readdir } from "node:fs/promises"
import { unlink } from "node:fs/promises"
import path from "node:path"

export async function excludeDownload(fileFormat) {
    try {
        const files = await readdir("./src/downloads/")
        const mp3Files = files.filter((f) => f.endsWith(fileFormat))
        for (const f of mp3Files) {
            const filepath = path.resolve("./src/downloads/" + f)
            await unlink(filepath)
            console.log("Arquivo Excluido: ", f)
        }
    } catch (e) {
        console.log(e)
    }
}