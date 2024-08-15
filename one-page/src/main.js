import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPotiah } from 'potiah'

createApp(App).use(createPotiah()).mount('#app')
