import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ImageSlide from "@/components/MediaComponents/ImageSlide.vue"
import VDO from "@/components/MediaComponents/VDO.vue"
const app = createApp(App)
app.component("ImageSlide",ImageSlide)
app.component("VDO",VDO)
app.use(router)
app.mount('#app')
