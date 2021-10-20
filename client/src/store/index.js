import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
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
    }
  },
  modules: {
  }
})
