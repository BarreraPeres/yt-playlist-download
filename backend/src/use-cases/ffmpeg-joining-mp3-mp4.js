import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';

export async function ffmpegJoiningMp3Mp4(filepathMp4, filepathMp3, filepath) {
    ffmpeg.setFfmpegPath(ffmpegPath);

    return new Promise((resolve, reject) => {
        ffmpeg()
            .addInput(filepathMp4)
            .addInput(filepathMp3)
            .saveToFile(filepath)
            .run()
            .on("end", () => {
                resolve()
            })
    })
}