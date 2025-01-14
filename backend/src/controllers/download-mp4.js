import ytdl from "@distube/ytdl-core"
import path from 'node:path';
import fs from 'node:fs';
import { createFolder } from "../utils/create-folder.js";
import { replaceTitle } from "../utils/replace-title.js"
import { YoutubeMp4 } from "../use-cases/download-mp4.js";
import { excludeDownloadMp4 } from "../use-cases/exclude-download-mp4.js";
import { excludeDownloadMp3 } from "../use-cases/exclude-download-mp3.js";
import { ffmpegJoiningMp3Mp4 } from "../use-cases/ffmpeg-joining-mp3-mp4.js";


export async function downloadControllerMp4(request, reply) {
    const audioMp4 = new YoutubeMp4()

    try {
        const { id_video } = request.params

        const url = `https://www.youtube.com/watch?v=${id_video}`
        const { videoDetails } = await ytdl.getBasicInfo(url)

        const folder = await createFolder()

        const title = await replaceTitle(videoDetails.title)

        const filepathOfVideo = path.resolve(folder, "video.mp4")
        const filepathOfAudio = path.resolve(folder, "audio.mp3")
        const filepath = path.resolve(folder, title + ".mp4")

        await audioMp4.download(url, filepathOfVideo, filepathOfAudio)
        console.info("baixou o video e o audio")

        await ffmpegJoiningMp3Mp4(filepathOfVideo, filepathOfAudio, filepath)
        console.info("juntou o video e o audio")

        const video_stream = fs.createReadStream(filepath)

        return reply.status(200).headers({
            "content-type": "video/mp4",
            "content-disposition": `attachment; filename=${title}.mp4`
        }).send(video_stream)


    } catch (e) {
        console.log(e)
        return reply.status(500).send({ message: "erro ao baixar" })
    } finally {
        await excludeDownloadMp4()
        await excludeDownloadMp3()
    }

}