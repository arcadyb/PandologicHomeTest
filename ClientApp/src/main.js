import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import router from './router';
import './style.css'
import App from './App.vue'

import 'bootstrap/dist/js/bootstrap.js'


createApp(App).use(router).mount('#app')
