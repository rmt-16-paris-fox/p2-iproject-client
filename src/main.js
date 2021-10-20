import Vue from 'vue';
import vueDebounce from 'vue-debounce';
import VueSpeech from 'vue-speech';
import AOS from 'aos';
import Toasted from 'vue-toasted';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueSpeech);
Vue.use(BootstrapVue);
Vue.use(vueDebounce, {
  listenTo: ['input', 'keyup'],
});
Vue.use(Toasted, {
  iconPack: 'fontawesome',
});

Vue.toasted.register(
  'success_message',
  (toastPayload) => toastPayload.message,
  {
    type: 'success',
    duration: 3000,
    action: {
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      },
    },
    position: 'bottom-right',
  },
);

Vue.toasted.register(
  'error_message',
  (toastPayload) => toastPayload.message,
  {
    type: 'error',
    duration: 3000,
    action: {
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      },
    },
    position: 'bottom-right',
  },
);

Vue.toasted.register(
  'info_message',
  (toastPayload) => toastPayload.message,
  {
    type: 'info',
    duration: 5000,
    action: {
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      },
    },
    position: 'bottom-right',
  },
);

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount('#app');
