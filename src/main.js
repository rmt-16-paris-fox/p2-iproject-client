/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GSignInButton from "vue-google-signin-button";
import "@/assets/vendor/fontawesome-free/css/all.css";
import "@/assets/css/fontfamily.css";
import "@/assets/css/sb-admin-2.min.css";

Vue.config.productionTip = false;

Vue.use(GSignInButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
