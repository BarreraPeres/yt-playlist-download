import { z } from "zod";
import "dotenv/config"

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    HOST: z.string().default("0.0.0.0"),
    AUDIO_TEST_FILEPATH: z.string().default(""),
    CORS_ORIGIN: z.string().default("*"),
    YOUTUBE_COOKIE_HSID: z.string(),
    YOUTUBE_COOKIE_SSID: z.string(),
    YOUTUBE_COOKIE_SID: z.string(),
    NODE_ENV: z.enum(["dev", "production"]).default("dev")
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.log("ERROR IN ENVIRONMENT VARIABLES", _env.error.format())
    throw new Error("ERROR IN ENVIRONMENT VARIABLES")
}

export const env = _env.data
