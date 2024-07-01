// this runs in Node.js on the server.
import { createSSRApp } from 'vue'
// Vue's server-rendering API is exposed under `vue/server-renderer`.
import { renderToString } from 'vue/server-renderer'

import App from './App.vue'

export async function render() {
  const app = createSSRApp(App)
  return await renderToString(app)
}
