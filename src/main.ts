import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import './main.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

app.use(router)
app.use(pinia)

app.mount('#app')
