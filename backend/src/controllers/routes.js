import { downloadController } from "./download.js";

export async function routes(app) {

    app.get("/download/:id_video", downloadController)
}