import { z } from "zod";
import dotenv from "dotenv"
import path from "node:path"
import dirname from "../../dirname.js";

dotenv.config({ path: path.resolve(dirname, ".env"), })

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    HOST: z.string().default("0.0.0.0"),
    AUDIO_TEST_FILEPATH: z.string().default(""),
    CORS_ORIGIN: z.string().default("*"),
    YOUTUBE_COOKIE_HSID: z.string(),
    YOUTUBE_COOKIE_SSID: z.string(),
    YOUTUBE_COOKIE_SID: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.log("ERROR IN ENVIRONMENT VARIABLES", _env.error.format())
    throw new Error("ERROR IN ENVIRONMENT VARIABLES")
}


export const env = _env.data
