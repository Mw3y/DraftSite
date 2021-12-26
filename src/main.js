import { createApp } from 'vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import './resources/style/tailwind.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')