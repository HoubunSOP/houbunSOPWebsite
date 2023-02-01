import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from "axios";
import VueAxios from "vue-axios";
import requests from './utils/request';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import '@/assets/css/main.css'

const app = createApp(App)

app.use(router,VueAxios, axios,requests)
app.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 10,
  newestOnTop: true
});
app.mount('#app')