import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    SET_IS_LOGGED_IN (state, payload = false) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    login (context, { email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/public/login',
          data: { email, password }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    register (context, { email, password, fullName }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/public/register',
          data: { email, password, fullName }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    googleLogin (context, idToken) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/public/login-google',
          data: { google_token: idToken }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
