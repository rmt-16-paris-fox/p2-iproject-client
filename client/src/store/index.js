import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    messages: []
  },
  mutations: {
    SET_IS_LOGIN (state, paylod = false) {
      state.isLogin = paylod
    },
    PUSH_MESSAGES (state, payload) {
      state.messages.push(payload)
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
    loginGoogle (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'users/login-google',
          method: 'POST',
          data: {
            token: payload
          }
        })
          .then(({ data }) => {
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
    },
    addNote (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/todos/notes/add',
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
    },
    getData (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `/todos/${payload}`,
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
    editTodo (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'PUT',
          url: `/todos/${payload.id}`,
          data: {
            title: payload.title,
            content: payload.content,
            tag: payload.tag
          },
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
    delete (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'DELETE',
          url: `/todos/${payload}`,
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
    updateStatus (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'PATCH',
          url: `/todos/status/${payload.id}`,
          data: {
            status: payload.status
          },
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
