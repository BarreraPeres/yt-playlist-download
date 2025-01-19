import path from 'node:path';
import { env } from './env/env.js';

console.log("ESTAMOS EM: ", env.NODE_ENV)
export const dirname = env.NODE_ENV === 'production'
    ? '/tmp/downloads'
    : path.join(process.cwd(), 'src', 'downloads');