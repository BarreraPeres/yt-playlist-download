import ytdl from "@distube/ytdl-core";
import fs from "node:fs"
import { finished } from 'node:stream/promises';

export class YoutubeMp4 {
    async download(url, filepath, quality, agent) {

        const streamVideo = fs.createWriteStream(filepath)

        ytdl(url, {
            agent,
            filter: "video",
            quality: quality
        }).pipe(streamVideo)
            .on("error", (e) => {
                console.log(e)
            })
            .on("finish", () => {
                console.log("[video] finish")
            })

        await finished(streamVideo)


    }
}
