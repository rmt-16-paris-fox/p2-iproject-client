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
          url: '/users/login',
          method: 'POST',
          data: {
            email,
            password,
          },
        })
          .then(({ data }) => {
            console.log(data)
            localStorage.setItem('access_token', data.access_token)
            commit('SET_IS_LOGIN', true)
            resolve()
          })
          .catch((err) => {
            console.log(err)
            reject(err.response)
          })
      })
    },
    loginGoogle(_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/users/login-google',
          method: 'POST',
          data: {
            token: payload,
          },
        })
          .then(({ data }) => {
            resolve(data)
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
    fetchProduct() {
      return new Promise((resolve, reject) => {
        axios({
          url: '/products',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            console.log(data.rows)
            resolve(data.rows)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    addProduct(_, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        let form = new FormData()
        form.append('name', payload.name)
        form.append('price', payload.price)
        form.append('imageUrl', payload.imageUrl)
        form.append('stock', payload.stock)
        form.append('categoryId', payload.categoryId)
        form.append('brandId', payload.brandId)
        axios({
          url: '/products',
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
          data: form,
        })
          .then(({ data }) => {
            console.log(data)
            resolve()
          })
          .catch((err) => {
            console.log(err)
            reject(err.response)
          })
      })
    },
    deleteProduct(_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/products/${payload}`,
          method: 'DELETE',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            console.log(data)
            resolve(data)
          })
          .catch((err) => {
            console.log(err)
            reject(err.response)
          })
      })
    },
    getTransaction(_, payload) {
      console.log(payload)
      // return new Promise((resolve, reject) => {
      //   axios({
      //     url: `/transactions/${payload}`,
      //   })
      // })
    },
    getCategory() {
      return new Promise((resolve, reject) => {
        axios({
          url: '/categories',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            // console.log(data, 'ini category')
            resolve(data)
          })
          .catch((err) => {
            // console.log(err.response)
            reject(err.response)
          })
      })
    },
    getBrand() {
      return new Promise((resolve, reject) => {
        axios({
          url: '/brands',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            console.log(data)
            resolve(data)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
  },
  modules: {},
})
