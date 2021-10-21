import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
import { swalError } from '../apis/swal'
import youtube from '../apis/youtube'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    dataClass: [],
    detailClass: {},
    myCLass: [],
    videos: []
  },
  mutations: {
    SET_LOG_IN: function (state, payload) {
      state.isLogin = payload
    },
    SET_DATA_CLASS: function (state, payload) {
      state.dataClass = payload
    },
    SET_DETAIL_CLASS: function (state, payload) {
      state.detailClass = payload
    },
    SET_DATA_MY_CLASS: function (state, payload) {
      state.myCLass = payload
    },
    SET_VIDEOS: function (state, payload) {
      state.videos = payload
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
            reject(err)
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
    },
    LoginGoogle (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/login-google',
          method: 'post',
          data: { token: payload }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            console.log(err)
            console.log(err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    FetchData (context, payload) {
      axios({
        url: '/class',
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('SET_DATA_CLASS', data)
        })
        .catch((err) => {
          swalError(err.response.data.message)
        })
    },
    Detail (context, payload) {
      axios({
        url: `/class/${payload}`,
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('SET_DETAIL_CLASS', data)
        })
        .catch((err) => {
          swalError(err.response.data.message)
        })
    },
    MyClass (context, payload) {
      axios({
        url: '/myclass',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_DATA_MY_CLASS', data)
        })
        .catch((err) => {
          swalError(err.response.data.message)
        })
    },
    AddClass (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/myclass/${payload}`,
          method: 'post',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    FetchVideo (context, payload) {
      return new Promise((resolve, reject) => {
        youtube({
          url: '/search',
          method: 'get',
          params: {
            q: payload
          }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
