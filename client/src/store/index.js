import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_LOG_IN: function (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    Login (context, { email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/login',
          method: 'post',
          data: { email, password }
        })
          .then(({ data }) => {
            localStorage.setItem('access_token', data.access_token)
            resolve()
          })
          .catch((err) => {
            reject(err.response.data.message)
          })
      })
    },
    Register (context, { name, email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/register',
          method: 'post',
          data: { email, password, name }
        })
          .then(() => {
            resolve()
          })
          .catch((err) => {
            reject(err.response.data.message)
          })
      })
    }
  },
  modules: {
  }
})
