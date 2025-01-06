export function DownloadProgress(percetege) {
    const bar = document.getElementById("bar_progress")
    bar.style.width = `${percetege}%`
    setTimeout(() => {
        bar.style.width = "0%"
    }, 3000)
}