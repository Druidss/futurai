import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPotiah } from 'potiah'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';

createApp(App).use(Antd).use(createPotiah()).mount('#app')
