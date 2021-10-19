import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeDatas: [],
    wishlistDatas: [],
    watchListDetail: null
  },
  mutations: {
    SET_HOMEDATA (state, payload) {
      // console.log(payload, 'di mutation')
      state.homeDatas = payload
    },
    SET_WISHLISTDATA (state, payload) {
      state.wishlistDatas = payload
    },
    SET_WATCHLISTDETAIL (state, payload) {
      state.watchListDetail = payload
    }
  },
  actions: {
    handleLogin (_, payload) {
      // console.log(payload, 'dari soter index.js')
      return axios({
        url: '/login',
        method: 'POST',
        data: payload
      })
    },
    handleRegister (_, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: payload
      })
    },
    handleGoogleLogin (_, payload) {
      // console.log(payload, 'token di handle google')
      return axios({
        url: '/customer/login-google',
        method: 'POST',
        data: {
          token: payload
        }
      })
    },
    getHomeData (context, payload) {
      axios({
        url: '/schedule',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(resp => {
          console.log(resp, 'data balikan buat home data')
          context.commit('SET_HOMEDATA', resp.data)
        })
        .catch(err => {
          console.log(err, 'err data balikan buat home data')
        })
    },
    handleWatchlist (_, payload) {
      console.log(payload, 'di store')
      console.log(payload.fixture.id, payload.fixture.date)
      axios({
        url: '/watchlist',
        method: 'POST',
        data: {
          fixturesId: payload.fixture.id,
          playDate: payload.fixture.date,
          data: payload
        },
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    getUserWishlist (context) {
      axios({
        url: '/watchlist',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(resp => {
          console.log(resp.data, 'data balikan buat wishlist')
          context.commit('SET_WISHLISTDATA', resp.data)
        })
        .catch(err => {
          console.log(err, 'err data balikan buat wishlist')
        })
    },
    handleDetailData (context, payload) {
      console.log(payload, 'payload store')
      axios({
        url: `/watchlist/${payload}`,
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(resp => {
          console.log(resp.data, 'data balikan buat wishlist by id')
          context.commit('SET_WATCHLISTDETAIL', resp.data)
        })
        .catch(err => {
          console.log(err, 'err data balikan buat wishlist by id')
        })
    }
  },
  modules: {
  }
})
