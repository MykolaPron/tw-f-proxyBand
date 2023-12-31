import express from 'express'
import cors from 'cors'
import * as React from 'react'
import ReactDOM from 'react-dom/server'
import {matchPath} from 'react-router-dom'
import {StaticRouter} from 'react-router-dom/server';
import serialize from 'serialize-javascript'
import App from './App'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.static('dist'))

app.get('*', (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(route.path, req.url)) || {}

    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.path, req.query)
        : Promise.resolve()

    promise.then((data) => {
        const markup = ReactDOM.renderToString(
            <StaticRouter location={req.url}>
                <App serverData={data}/>
            </StaticRouter>
        )

        res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>TW</title>
          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          <script>window.__INITIAL_ROUTE__ = ${serialize(activeRoute.path)}</script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
    }).catch(next)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})