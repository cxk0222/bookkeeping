import { createApp } from 'vue'
import { App } from './App.tsx'
import { Foo } from './views/Foo.tsx'
import { Bar } from './views/Bar.tsx'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
