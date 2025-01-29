import './index.css'
import { formHandleDownloadLink } from './functions/form-handle-download-link.js'

document.querySelector('#app').innerHTML = `

  <form id="FormYT" class="flex mb-6">
    <input 
      class="
        text-sm
        text-zinc-300 
        border
        border-emerald-800
        hover:border-emerald-950
        rounded-lg 
        hover:bg-emerald-950
        bg-emerald-900 
        focus:ring-emerald-950
        focus:border-emerald-950
        p-3 
        ps-10 
        w-[540px]"
      placeholder="Baixe um link de um vídeo ou de uma playlist do YouTube..."
      id="link"
    > 

    <select
      name="dropdown"     
      id="dropdown" 
      class="
        text-sm
        text-zinc-300
        bg-emerald-900
        hover:bg--950
        ml-1
        py-1
        px-4
        rounded-lg" 
      >
      <option value="mp3">.Mp3</option>
      <option value="mp4">.Mp4</option>
    </select>

    <div id="videoQuality" class="ml-2 hidden">
      <label for="quality" class="text-sm text-zinc-300"></label>
      <select id="quality" class="text-sm text-zinc-300 bg-emerald-900 ml-1 py-1 px-4 rounded-lg">
        <option value="lowest">Baixa</option>
        <option value="highestvideo">Alta</option>
      </select>
    </div>
    
  </form>
 
  <div 
    id="ytplayer"
    class="
      flex
      w-[640px]
      h-[360px]
      bg-zinc-900
      rounded-lg
      aspect-video"
  >
  
    <button
      id="download"
      class="
        absolute
        ml-[542px]
        mt-[300px]
        bg-emerald-900
        py-3
        px-8
        rounded-md
        hover:bg-emerald-950
      "
    >
      <svg class="text-zinc-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
    </button>
 
  </div>
`

document.getElementById("dropdown").addEventListener("change", (e) => {
  const videoQuality = document.getElementById("videoQuality");
  if (e.target.value === "mp4") {
    videoQuality.classList.remove("hidden");
    link.classList.remove("w-[540px]")
    link.classList.add("w-[450px]");
  } else {
    videoQuality.classList.add("hidden");
    link.classList.remove("w-[450px]");
    link.classList.add("w-[540px]")
  }
});

document.getElementById("download").addEventListener("click", async (e) => {

  await formHandleDownloadLink()

})
