import { getIdByLink } from "./get-id-by-link.js"
import { ApiYoutube } from "../lib/api-youtube.js"
import { queue } from "./queue.js"
import { endLoader, startLoader } from "../utils/loader.js"

export async function formHandleDownloadLink() {

    const url = document.getElementById("link").value
    const typeDownload = document.getElementById("dropdown").value;

    const { id_playlist, id_video } = await getIdByLink(url)

    if (!id_playlist && !id_video) {
        alert("Link inválido!!")
        return
    }

    try {
        await startLoader()

        if (!id_playlist) {
            const yt = new ApiYoutube()
            console.log("inicando o download do seu video")
            await yt.videoLoad(id_video)
            await queue(typeDownload)
        } else {
            const yt = new ApiYoutube()
            console.log("inicando o download da sua playlist")
            await yt.playlistLoad(id_playlist)
            await queue(typeDownload)
        }
    } catch (e) {
        console.log(e)
    } finally {
        endLoader()
    }



}