// main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import axios from 'axios';

const app = createApp(App);
app.use(store);app.
config.globalProperties.$axios = axios;
app.mount('#app');
