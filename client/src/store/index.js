import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    SET_IS_LOGIN: function (state, payload = false) {
      state.isLogin = payload
    },
  },
  actions: {
    login({ commit }, payload) {
      const { email, password } = payload
      return new Promise((resolve, reject) => {
        axios({
          url: '/login',
          method: 'POST',
          data: {
            email,
            password,
          },
        })
          .then(({ data }) => {
            localStorage.setItem('access_token', data.access_token)
            commit('SET_IS_LOGIN', true)
            resolve()
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    register(_, payload) {
      const { username, email, password } = payload
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios({
          url: '/users/register',
          method: 'POST',
          data: {
            username,
            email,
            password,
          },
        })
          .then(({ data }) => {
            console.log(data)
            resolve()
          })
          .catch((err) => {
            console.log(err)
            reject(err.response.data)
          })
      })
    },
    fetchProduct(_, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios({
          url: '/products',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            console.log(data)
            resolve()
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
  },
  modules: {},
})
