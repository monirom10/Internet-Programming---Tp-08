import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/login.css';
import './assets/css/register.css';
import './assets/css/home.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
