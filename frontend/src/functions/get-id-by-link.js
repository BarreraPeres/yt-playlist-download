export async function getIdByLink(url) {
    const [link, parms] = url.split("?v=")
    if (!parms) {
        const [url_youtube, id_playlist] = link.split("?list=")
        return { id_playlist }
    } else {
        const [id_video, id_playlist] = parms.split("&list=")
        return { id_playlist, id_video }
    }


}