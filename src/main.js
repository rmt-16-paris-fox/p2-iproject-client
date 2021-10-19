import Vue from 'vue';
import vueDebounce from 'vue-debounce';
import VueSpeech from 'vue-speech';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueSpeech);
Vue.use(vueDebounce, {
  listenTo: ['input', 'keyup'],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
