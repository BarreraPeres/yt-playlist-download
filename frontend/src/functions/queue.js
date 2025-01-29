import axios from "axios"
import { DownloadProgress } from "../utils/download-progress.js"
import fileDownload from "js-file-download"

export async function queue(typeDownload, quality) {
    for (let i = 0; i < window.lista.length; i++) {
        try {
            await axios.get(`${import.meta.env.VITE_API_URL}/download/${window.lista[i]}/${typeDownload}?quality=${quality}`, {
                headers: {
                    "content-type": typeDownload === "mp3" ? "audio/mpeg" : "video/mp4"
                },
                onDownloadProgress: function (progressEvent) {
                    DownloadProgress(progressEvent.loaded * 100 / progressEvent.total)
                }
            }).then((res) => {
                const [filenames, title] = res.headers["content-disposition"].split("=")
                fileDownload(res.data, title)
                alert("Download Concluido " + title)
            })

        } catch (e) {
            console.log(e)
            throw new Error("Erro ao baixar", window.location.reload())
        }
    }
    setTimeout(() => window.location.reload(), 1000)
}
