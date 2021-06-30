import { createApp } from 'vue'
import App from './common-infrastructure/App.vue'
import router from './common-infrastructure/router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Tooltip from 'primevue/tooltip'
import { store } from './common-infrastructure/store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue)
app.directive('tooltip', Tooltip)
app.mount('#app')
