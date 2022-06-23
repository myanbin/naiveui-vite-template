import { createApp } from 'vue'
import router from './routers'
import App from './App.vue'

const app = createApp(App)

app.use(router)

router.isReady().then(() => app.mount('#app'))
