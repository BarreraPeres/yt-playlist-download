import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    AUDIO_TEST_FILEPATH: z.string().default(""),
    CORS_ORIGIN: z.string().default("*")
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.log("ERROR IN ENVIRONMENT VARIABLES", _env.error.format())
    throw new Error("ERROR IN ENVIRONMENT VARIABLES")
}


export const env = _env.data
