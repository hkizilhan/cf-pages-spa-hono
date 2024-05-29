import { Hono } from 'hono'
import { handle } from "hono/cloudflare-pages";

import { v2ApiRouter } from '#backend/apiv2.js'

const app = new Hono()

app.get('/api', async (c) => {
  return c.text('Data api')
})

// route grouping 
app.route('/api/v2', v2ApiRouter)


// catch unknown backend routes
app.get('/api/*', (c) => {
  return c.text('UNKNOWN ROUTE!')
})


// connect hono app with cloudflare pages request handler
export const onRequest = handle(app);

