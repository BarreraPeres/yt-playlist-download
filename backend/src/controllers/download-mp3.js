import ytdl from "@distube/ytdl-core"
import { YoutubeMp3 } from "../use-cases/download-mp3.js"
import path from 'node:path';
import fs from 'node:fs';
import { excludeDownload } from "../use-cases/exclude-download.js";
import { createFolder } from "../utils/create-folder.js";
import { replaceTitle } from "../utils/replace-title.js"

export async function downloadControllerMp3(request, reply) {
    const audioMp3 = new YoutubeMp3()

    try {
        const { id_video } = request.params

        const cookies = JSON.parse(fs.readFileSync("cookies.json"))

        const agent = ytdl.createAgent(cookies)

        const url = `https://www.youtube.com/watch?v=${id_video}`
        const { videoDetails } = await ytdl.getBasicInfo(url, { agent })

        const folder = await createFolder()

        const title = await replaceTitle(videoDetails.title)

        await audioMp3.download(url, title, folder, agent)

        const filepath = path.resolve(folder, `${title}.mp3`)

        const stats = fs.statSync(filepath);

        const audio_read = fs.createReadStream(filepath)

        return reply.status(200).headers({
            "content-type": "audio/mpeg",
            "content-disposition": `attachment; filename=${title}.mp3`,
            "content-length": `${stats.size}`
        }).send(audio_read)

    } catch (e) {
        console.log(e)
        return reply.status(500).send({ message: "erro ao baixar" })
    } finally {
        await excludeDownload(".mp3")
    }

}
