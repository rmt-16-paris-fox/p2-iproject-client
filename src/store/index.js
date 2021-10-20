import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isAdmin: false
  },
  mutations: {
    SET_IS_LOGGED_IN (state, payload = false) {
      state.isLoggedIn = payload
    },
    SET_IS_ADMIN (state, payload = false) {
      state.isAdmin = payload
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
    getCredentials () {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/public/user',
          headers: { access_token: localStorage.getItem('access_token') }
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
    },
    getMyKeyboards () {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/public/my-keyboards',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    fetchVideos () {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/public/videos'
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    order (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/public/keyboards',
          headers: { access_token: localStorage.getItem('access_token') },
          data: payload
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    charge (context, { keyboardId, phoneNumber }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/public/ovo/charge',
          headers: { access_token: localStorage.getItem('access_token') },
          data: { keyboardId, phoneNumber }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    fetchGallery () {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/public/keyboards'
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    getKeyboard (context, keyboardId) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `/public/keyboards/${keyboardId}`
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    fetchKeyboards () {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/admin/keyboards',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    fetchUsers () {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/admin/users',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    addKeyboard (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/admin/keyboards',
          headers: { access_token: localStorage.getItem('access_token') },
          data: payload
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    // !ERROR
    addImages (context, { images, keyboardId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `/admin/keyboards/${keyboardId}/images`,
          headers: { access_token: localStorage.getItem('access_token') },
          data: images
        })
          .then(({ data }) => {
            console.log(data)
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    editKeyboard (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'PUT',
          url: `/admin/keyboards/${payload.keyboardId}`,
          headers: { access_token: localStorage.getItem('access_token') },
          data: {
            name: payload.name,
            mountingStyle: payload.mountingStyle,
            palteMaterial: payload.palteMaterial,
            keycaps: payload.keycaps,
            switches: payload.switches,
            miscellaneous: payload.miscellaneous,
            isDone: payload.isDone,
            isPaid: payload.isPaid,
            UserId: payload.UserId
          }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    }
  },
  modules: {
  }
})
