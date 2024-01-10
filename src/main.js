import './assets/main.css'

import { createApp } from 'vue'
import App from './components/App.vue'
import store from './store'
import { getAllMessages } from './store/actions'

// createApp(App).use(store).mount('#app')

const app = createApp(App)

app.use(store)

app.mount('#app')

getAllMessages(store)
