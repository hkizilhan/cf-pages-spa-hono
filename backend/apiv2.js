import { Hono } from 'hono'

export const v2ApiRouter = new Hono()

v2ApiRouter.get('/', (c) => c.text('Api v2'))

