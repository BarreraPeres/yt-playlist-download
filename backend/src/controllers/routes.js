import { downloadControllerMp3 } from "./download-mp3.js";
import { downloadControllerMp4 } from "./download-mp4.js";

export async function routes(app) {

    app.get("/download/:id_video/mp3", downloadControllerMp3)
    app.get("/download/:id_video/mp4", downloadControllerMp4)
}