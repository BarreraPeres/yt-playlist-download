import fastifyCors from "@fastify/cors"
import fastify from "fastify"
import { routes } from "./controllers/routes.js"
import { env } from "./env/env.js"

export const app = fastify()

app.register(routes)

app.register(fastifyCors, {
    origin: "env.CORS_ORIGIN",
    exposedHeaders: ["content-disposition"]
})

app.listen({ port: env.PORT }).then((address) => {
    console.log(`server is running in ${address}`)
})