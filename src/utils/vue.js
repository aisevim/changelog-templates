import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

export function vueToHtmlString(component, data) {
  const app = createSSRApp(component)
  return renderToString(app, data)
}
