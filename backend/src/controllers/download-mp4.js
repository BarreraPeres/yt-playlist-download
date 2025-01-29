import ytdl from "@distube/ytdl-core"
import path from 'node:path';
import fs from 'node:fs';
import { createFolder } from "../utils/create-folder.js";
import { replaceTitle } from "../utils/replace-title.js"
import { YoutubeMp4 } from "../use-cases/download-mp4.js";
import { excludeDownload } from "../use-cases/exclude-download.js";
import { env } from "../env/env.js"

export async function downloadControllerMp4(request, reply) {
    const audioMp4 = new YoutubeMp4()

    try {
        const { id_video } = request.params
        let { quality } = request.query

        const cookies = [
            { name: "HSID", value: env.YOUTUBE_COOKIE_HSID },
            { name: "SID", value: env.YOUTUBE_COOKIE_SID },
            { name: "SSID", value: env.YOUTUBE_COOKIE_SSID },
        ];

        const agent = ytdl.createAgent(cookies)

        const url = `https://www.youtube.com/watch?v=${id_video}`
        const { videoDetails } = await ytdl.getBasicInfo(url, { agent })

        const folder = await createFolder()
        const title = await replaceTitle(videoDetails.title)

        const filepath = path.resolve(folder, title + ".mp4")

        await audioMp4.download(url, filepath, quality, agent)

        const video_stream = fs.createReadStream(filepath)

        const stats = fs.statSync(filepath)

        return reply.status(200).headers({
            "content-type": "video/mp4",
            "content-disposition": `attachment; filename=${title}.mp4`,
            "content-length": `${stats.size}`
        }).send(video_stream)


    } catch (e) {
        console.log(e)
        return reply.status(500).send({ message: "erro ao baixar" })
    } finally {
        await excludeDownload(".mp4")
    }

}