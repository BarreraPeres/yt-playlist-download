import { after, describe, it } from "node:test"
import assert from "node:assert"
import fs, { unlink } from "node:fs"
import { YoutubeMp4 } from "../../../src/use-cases/download-mp4.js"
import { env } from "../../../src/env/env.js"

after(async () => {
    unlink(AUDIO_TEST_FILEPATH, () => { })
})

const AUDIO_TEST_FILEPATH = env.AUDIO_TEST_FILEPATH

if (AUDIO_TEST_FILEPATH) {
    describe("Youtube Downloader mp4 Use Case", () => {

        it("should be possible to inicialize youtube", async () => {

            const yt = new YoutubeMp4()

            assert(yt)
            assert(yt.download)
        })

        it("it should be possible to downloader a video and a audio", async () => {
            const yt = new YoutubeMp4()
            const url = "https://www.youtube.com/watch?v=30NRBUSqvnQ"
            const filepathOfVideo = path.resolve(folder, "video.mp4")
            const filepathOfAudio = path.resolve(folder, "audio.mp3")
            const agent = {}

            await yt.download(url, filepathOfVideo, filepathOfAudio, "lowest", agent)

            const statResponseVideo = await fs.promises.stat(filepathOfVideo)

            assert(statResponseVideo)
            assert(statResponseVideo.dev)
            assert(statResponseVideo.mode)
        })


        it("it should be possible to downloader a audio", async () => {
            const yt = new YoutubeMp4()
            const url = "https://www.youtube.com/watch?v=30NRBUSqvnQ"
            const filepathOfVideo = path.resolve(folder, "video.mp4")
            const filepathOfAudio = path.resolve(folder, "audio.mp3")
            const agent = {}

            await yt.download(url, filepathOfVideo, filepathOfAudio, "lowest", agent)

            const statResponseAudio = await fs.promises.stat(filepathOfAudio)

            assert(statResponseAudio)
            assert(statResponseAudio.dev)
            assert(statResponseAudio.mode)
        })

    })
}