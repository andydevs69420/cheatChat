
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";


import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';


/** fontawesome part */ 
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";


/** routing */
import {createRouter, createWebHistory} from "vue-router";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";

const ROUTER = createRouter({
      history: createWebHistory(),
      routes: [
            {path: "/", name: "signin", component: Signin},
            {path: "/signup", name: "signup", component: Signup}
      ]
});

library.add(fas);

const app = createApp(App);
      app.component("fa", FontAwesomeIcon);

      app.use({appname: "cheatChat"})
      app.use(bootstrap);
      app.use(ROUTER);

      app.mount('#app');
