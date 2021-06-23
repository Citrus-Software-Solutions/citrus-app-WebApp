import { createApp } from 'vue'
import App from './common-infrastructure/App.vue'
import router from './common-infrastructure/router'

createApp(App).use(router).mount('#app')
