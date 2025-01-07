import ytdl from "@distube/ytdl-core"
import { YoutubeMp3 } from "../use-cases/download-mp3.js"
import path from 'node:path';
import fs from 'node:fs';
import { excludeDownloadMp3 } from "../use-cases/exclude-download-mp3.js";
import { createFolder } from "../utils/create-folder.js";

export async function downloadController(request, reply) {
    const audioMp3 = new YoutubeMp3()

    try {
        const { id_video } = request.params

        const url = `https://www.youtube.com/watch?v=${id_video}`
        const { videoDetails } = await ytdl.getBasicInfo(url)

        const folder = await createFolder()

        await audioMp3.download(url, videoDetails.title, folder)

        const filepath = path.resolve(folder, `${videoDetails.title}.mp3`)

        const audio_read = fs.createReadStream(filepath)

        return reply.status(200).headers({
            "content-type": "audio/mpeg",
            "content-disposition": `attachment; filename=${videoDetails.title}.mp3`
        }).send(audio_read)

    } catch (e) {
        console.log(e)
        return reply.status(500).send({ message: "erro ao baixar" })
    } finally {
        await excludeDownloadMp3()
    }

}