import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: '',
    userId: '',
    transaction: [],
  },
  mutations: {
    SET_IS_LOGIN: function (state, payload) {
      state.isLogin = payload
    },
    SET_PRODUCTS: function (state, payload = '') {
      state.products = payload
    },
    SET_USER_ID: function (state, payload) {
      state.userId = payload
    },
    SET_IS_TRANSACTION: function (state, payload = []) {
      state.transaction = payload
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
            localStorage.setItem('access_token', data.access_token)
            commit('SET_IS_LOGIN', true)
            commit('SET_USER_ID', data.id)
            resolve()
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    loginGoogle({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/users/login-google',
          method: 'POST',
          data: {
            token: payload,
          },
        })
          .then(({ data }) => {
            commit('SET_IS_LOGIN', true)
            resolve(data)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    register(_, payload) {
      const { username, email, password } = payload
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
            resolve()
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    fetchProduct(_, payload) {
      return new Promise((resolve, reject) => {
        const page = payload.page ? payload.page : 1
        const name = payload.name ? payload.name : ''
        axios({
          url: `/products?page=${page}&name=${name}`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            resolve(data.rows)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    fetchAllProducts() {
      return new Promise((resolve, reject) => {
        axios({
          url: `/products`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            resolve(data.rows)
          })
          .catch((err) => {
            reject(err.response.data)
          })
      })
    },
    getOneProducts({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/products/${payload}`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            commit('SET_PRODUCTS', data)
            resolve(data)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    addProduct(_, payload) {
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
            resolve()
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    editProduct(_, payload) {
      return new Promise((resolve, reject) => {
        let form = new FormData()
        form.append('name', payload.name)
        form.append('price', payload.price)
        form.append('imageUrl', payload.imageUrl)
        form.append('stock', payload.stock)
        form.append('categoryId', payload.categoryId)
        form.append('brandId', payload.brandId)
        axios({
          url: `/products/${payload.id}`,
          method: 'PUT',
          data: form,
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
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
            resolve(data)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    addTransaction(_, payload) {
      return new Promise((resolve, reject) => {
        const { userId, productId, totalAmount, totalQuantity } = payload
        axios({
          url: `/transactions/${productId}`,
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
          data: {
            userId,
            productId,
            totalAmount,
            totalQuantity,
          },
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    getTransaction({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/transactions`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            commit('SET_IS_TRANSACTION', data.rows)
            resolve(data.rows)
          })
          .catch9((err) => {
            reject(err.response)
          })
      })
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
            resolve(data)
          })
          .catch((err) => {
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
