import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';
import './style.css'
import  './main.css'

// createApp(App).mount('#app')
const pinia = createPinia()
const app = createApp(App)

app.use(pinia).mount('#app')