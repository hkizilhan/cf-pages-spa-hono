# Cloudflare Pages Fullstack SPA With Hono🔥 Backend

This template provides a minimal full-stack setup to get React working with Hono.js backend in Cloudflare Pages.

## Features

- Cloudflare Pages (different from workers)
- React SPA with vite (you can change)
- Hono.js backend


## How to use

- Clone this repository and run `npm install`
- Create a new Cloudflare Pages project and select the cloned repository
- Configure the build settings to use the `npm run build` command
- Configure the build settings to use the `dist` directory as the output directory
- Deploy the project to Cloudflare Pages
- After setup, you can generate wrangler.toml as single source of config with `wrangler pages download config projectName`

## Backend

The backend is built using Hono.js.

Backend connected with cloudflares pages by /functions directory. So all backend build stuff handled by cloudflare pages/wrangler automatically

`/functions` CF Pages, backend routing folder. Contains only one file for connecting hono app with CF.

`/backend` Project backend files for route grouping or other lib files.

⚠️👀 Take a look at package.json

## Frontend

The frontend is built using React. You can use any framework that can generate static output.

`/dist` directory used as frontend build output.

## Licence

MIT


