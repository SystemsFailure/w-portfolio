import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './output.css'

import Vue3Marquee from 'vue3-marquee'

const app = createApp(App);

app
    .use(Vue3Marquee)
    .use(router)
    .mount('#app');

