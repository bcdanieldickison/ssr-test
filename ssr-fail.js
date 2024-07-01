import { exit } from 'process'
import { createServer as createViteServer } from 'vite'

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom'
})
const { render } = await vite.ssrLoadModule('/src/entry-server.js')
const appHtml = await render('/')
console.log(appHtml)
exit(0)
