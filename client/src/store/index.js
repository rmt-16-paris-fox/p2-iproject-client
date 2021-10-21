import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },

  },
  actions: {
    submitLogin(context, payload) {
      console.log(payload);
      return axios({
        method: "Post",
        url: "/login",
        data: payload
      });
    },
    submitregister(context, payload) {
      console.log(payload);
      return axios({
        method: "Post",
        url: "/register",
        data: payload
      });
    },
  },
  modules: {
  }
})
