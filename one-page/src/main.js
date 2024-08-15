import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPotiah } from 'potiah'
import Antd from 'ant-design-vue'
import Vue3Spline from 'vue3-spline'
import 'ant-design-vue/dist/reset.css';

createApp(App).use(Antd).use(createPotiah()).use(Vue3Spline).mount('#app')
