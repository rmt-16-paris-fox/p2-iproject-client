import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import vuetify from "./plugins/vuetify";
// import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;

const socket = io("https://i-project-colin.herokuapp.com/");

Vue.use(VueSocketIOExt, socket, { store });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
