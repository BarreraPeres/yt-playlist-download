export async function getIdByLink(url) {

    if (url.includes("&start_radio=")) {
        console.info("link de mix de playlist")
        const [link, mix_link] = url.split("&start_radio=")

        const data = await separeteIdPlaylistAndIdVideo(link)

        return { id_playlist: data.id_playlist, id_video: data.id_video }

    }

    if (url.includes("t=")) {
        console.info("link contém tempo")
        const [link, time] = url.split("&t=")

        const [youtube, id_video] = link.split("?v=")

        return { id_video }
    }

    if (url.includes("?si=")) {
        console.info("link de compartilhamento: ", url)
        const [link, parms] = url.split("?si=")

        const [youtube, id_video] = link.split("youtu.be/")

        return { id_video }

    }


    if (url.includes("&index")) {
        console.info("link com index da playlist")
        const [link, index] = url.split("&index=")

        const data = await separeteIdPlaylistAndIdVideo(link)

        return { id_playlist: data.id_playlist, id_video: data.id_video }
    }

    const data = await separeteIdPlaylistAndIdVideo(url)

    return { id_playlist: data.id_playlist, id_video: data.id_video }
}

async function separeteIdPlaylistAndIdVideo(url) {
    const [link, parms] = url.split("?v=")

    if (!parms) {
        const [url_youtube, id_playlist] = link.split("?list=")
        return { id_playlist }
    } else {
        const [id_video, id_playlist] = parms.split("&list=")
        return { id_playlist, id_video }
    }

}