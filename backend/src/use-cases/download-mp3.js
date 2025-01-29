import ytdl from "@distube/ytdl-core";
import fs from "node:fs"
import path from "node:path";
import { finished } from 'node:stream/promises';

export class YoutubeMp3 {

    async download(url, title, filepath, agent) {

        const stream = fs.createWriteStream(path.resolve(filepath, `${title}.mp3`))

        ytdl(url, {
            agent,
            filter: "audioonly",
            quality: "highestaudio",
        }).pipe(stream)
            .on("error", (e) => {
                console.log(e)
            })
            .on("finish", (e) => {
                console.log("[audioonly] finish")
            })

        await finished(stream)
    }
}
