import { createApp } from 'vue'
import { App } from './App.tsx'
import { createRouter } from 'vue-router'
import { routes } from './config/routes.tsx'
import { history } from './shared/history.tsx'

const router = createRouter({ routes, history })

const app = createApp(App)
app.use(router)
app.mount('#app')
