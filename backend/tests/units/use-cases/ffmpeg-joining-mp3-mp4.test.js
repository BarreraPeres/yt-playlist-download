import { after, describe, it } from "node:test"
import assert from "node:assert"
import fs, { unlink } from "node:fs"
import { ffmpegJoiningMp3Mp4 } from "../../../src/use-cases/ffmpeg-joining-mp3-mp4.js"
import path from "node:path"
import { env } from "../../../src/env/env.js"

after(async () => {
    unlink(AUDIO_TEST_FILEPATH, () => { })
})
const AUDIO_TEST_FILEPATH = env.AUDIO_TEST_FILEPATH
if (AUDIO_TEST_FILEPATH) {
    describe("ffmpeg Use Case", () => {


        it("it should be possible to joining boths mp3 and mp4", async () => {


            const filepathMp3 = path.resolve(salve, "audio.mp3")
            const filepathMp4 = path.resolve(salve, "video.mp4")
            const filepath = path.resolve(salve, "output")

            await ffmpegJoiningMp3Mp4(filepathMp3, filepathMp4, filepath)

            const statResponse = await fs.promises.stat(filepath)
            assert(statResponse)
            assert(statResponse.dev)
            assert(statResponse.mode)
        })



    })
}