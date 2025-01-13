import ytdl from "@distube/ytdl-core";
import fs from "node:fs"
import { finished } from 'node:stream/promises';

export class YoutubeMp4 {
    async download(url, filepathOfVideo, filepathOfAudio, quality) {

        const streamVideo = fs.createWriteStream(filepathOfVideo)
        const streamAudio = fs.createWriteStream(filepathOfAudio)

        ytdl(url, {
            filter: "video",
            quality: quality,
        }).pipe(streamVideo)
            .on("error", (e) => {
                console.log(e)
            })

        return new Promise(async (resolve, rejects) => {
            await finished(streamVideo).then(() => {
                ytdl(url, {
                    filter: "audioonly",
                }).pipe(streamAudio)
                    .on("error", (e) => {
                        console.log(e)
                    })
                    .on("finish", () => {
                        resolve()
                    })
            })
        })


    }
}
