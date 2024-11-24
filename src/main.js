import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';

const app = createApp(App)

app.use(router)
app.use(CkeditorPlugin)

app.mount('#app')
