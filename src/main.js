import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-socket.io";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import vuetify from "./plugins/vuetify";
// import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:3000/",
    // vuex: {
    //   store,
    //   actionPrefix: "SOCKET_ACTION",
    //   mutationPrefix: "SOCKET_MUTATION",
    // },
  })
);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
