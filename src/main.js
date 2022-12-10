
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

import Vue, { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'


const app = createApp(App);
      app.use(bootstrap);
      app.mount('#app');
