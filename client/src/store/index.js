import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_IS_LOGIN (state, paylod = false) {
      state.isLogin = paylod
    }
  },
  actions: {
    regis (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/users/regis',
          data: payload
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.response.data)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/users/login',
          data: payload
        })
          .then(({ data }) => {
            localStorage.setItem('access_token', data.accessToken)
            context.commit('SET_IS_LOGIN', true)
            resolve()
          })
          .catch((error) => {
            reject(error.response.data)
          })
      })
    },
    getTodos (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/todos',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.response.data)
          })
      })
    },
    getNotes (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/todos/notes',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.response.data)
          })
      })
    },
    addTodo (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/todos/add',
          data: payload,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error.response.data)
          })
      })
    }
  },
  modules: {
  }
})
