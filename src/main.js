import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'
import  Carousel  from 'vue3-carousel'

createApp(App).use(router).use(Carousel).mount('#app')
