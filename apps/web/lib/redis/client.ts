import { Redis } from '@upstash/redis'

const REDIS_URL = process.env.REDIS_URL!
const REDIS_TOKEN = process.env.REDIS_TOKEN!

/**
 * Aque deve ser um client http de redis, assim como o upstash
 * para que tenhamos suporte para utilizá-lo em runtimes edge,
 * como o middleware, por exemplo
 */

export const redis = new Redis({
	url: REDIS_URL,
	token: REDIS_TOKEN,
})
