import { after, describe, it } from "node:test"
import assert from "node:assert"
import fs, { unlink } from "node:fs"
import { YoutubeMp3 } from "../../../use-cases/download-mp3.js"
import { env } from "../../../env/env.js"

after(async () => {
    unlink(AUDIO_TEST_FILEPATH, () => { })
})

const AUDIO_TEST_FILEPATH = env.AUDIO_TEST_FILEPATH

if (AUDIO_TEST_FILEPATH) {
    describe("Youtube Downloader mp3 Use Case", () => {

        it("should be possible to inicialize youtube", async () => {

            const yt = new YoutubeMp3()

            assert(yt)
            assert(yt.download)
        })

        it("it should be possible to downloader a video", async () => {
            const yt = new YoutubeMp3()
            const url = "https://www.youtube.com/watch?v=30NRBUSqvnQ"
            const title = "audio"

            await yt.download(url, `${title}`, AUDIO_TEST_FILEPATH)

            const statResponse = await fs.promises.stat(AUDIO_TEST_FILEPATH)

            assert(statResponse)
            assert(statResponse.dev)
            assert(statResponse.mode)
        })

    })
}