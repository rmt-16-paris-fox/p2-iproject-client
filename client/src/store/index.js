import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    editPage: false,
    postToEdit: '',
    messages: []
  },
  mutations: {
    SET_IS_LOGGED_IN (state, payload) {
      state.isLoggedIn = payload
    },
    SET_EDIT_PAGE (state, payload) {
      state.editPage = payload
    },
    SET_POST_DATA (state, payload) {
      state.postToEdit = payload
    },
    PUSH_MESSAGES (state, payload) {
      state.messages.push(payload)
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
    },
    register (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/register',
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
    },
    fetchAllPost (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/posts',
          method: 'GET',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    createPost (_, payload) {
      return new Promise((resolve, reject) => {
        const form = new FormData()
        form.append('content', payload.content)
        form.append('imageUrl', payload.imageUrl)
        axios({
          url: '/posts',
          method: 'POST',
          headers: { access_token: localStorage.getItem('access_token') },
          data: form
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    getOnePost (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/posts/${payload}`,
          method: 'GET',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    editPost (_, payload) {
      return new Promise((resolve, reject) => {
        const form = new FormData()
        form.append('content', payload.content)
        form.append('imageUrl', payload.imageUrl)
        axios({
          url: `/posts/${payload.id}`,
          method: 'PUT',
          headers: { access_token: localStorage.getItem('access_token') },
          data: form
        })
          .then(({ data }) => {
            resolve()
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    addComment (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `comments/${payload.id}`,
          method: 'POST',
          headers: { access_token: localStorage.getItem('access_token') },
          data: { comment: payload.comment }
        })
          .then(({ data }) => {
            resolve()
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    getUserData (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user',
          method: 'GET',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    deleteComment (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/comments/${payload}`,
          method: 'DELETE',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    deletePost (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/posts/${payload}`,
          method: 'DELETE',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    loginGoogle (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/login-google',
          method: 'POST',
          data: { token: payload }
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
