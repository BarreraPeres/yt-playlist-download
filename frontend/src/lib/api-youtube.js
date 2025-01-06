var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.lista = []
window.ytPlayer = null
export class ApiYoutube {

    async playlistLoad(id) {
        return new Promise((resolve, reject) => {
            window.ytPlayer = new YT.Player("ytplayer", {
                events: {
                    "onReady": play,
                    "onStateChange": OnReadyPlay
                }
            })
            function play(e) {
                ytPlayer.loadPlaylist({
                    list: id,
                    listType: "playlist"
                })
            }
            function OnReadyPlay(e) {
                setTimeout(setList(e), 5000)
            }
            function setList(e) {
                window.lista = e.target.getPlaylist()
                resolve()
            }
        })
    }

    async videoLoad(id) {
        return new Promise((resolve, reject) => {
            window.ytPlayer = new YT.Player("ytplayer", {
                videoId: id,
                events: {
                    "onReady": play
                }
            })

            function play(e) {
                e.target.playVideo()
                window.lista.push(id)
                resolve()
            }
        })
    }
}
