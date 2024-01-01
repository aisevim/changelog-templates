import { createApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

export function vueToHtmlString(component, data) {
  const app = createApp(component)

  return renderToString(app, data)
}
