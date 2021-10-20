import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    SET_IS_LOGGED_IN (state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    login (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/login',
          method: 'POST',
          data: payload
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    }
  },
  modules: {
  }
})
