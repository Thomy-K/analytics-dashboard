import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-merry-drum-41167.upstash.io',
  token: process.env.REDIS_KEY!,
})
