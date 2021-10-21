import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../apis/server'
import Swal from "sweetalert2";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    followerIg: {},
    postCount: {},
    postIg: {},
    celebBirth: {},
    memeData: {}
  },
  mutations: {
    SET_FOLLOWERS(state, payload) {
      state.followerIg = payload
    },
    SET_POSTCOUNT(state, payload) {
      state.postCount = payload
    },
    SET_POST(state, payload) {
      state.postIg = payload
    },
    SET_CELEBBIRTH(state, payload) {
      state.celebBirth = payload
    },
    SET_MEME(state, payload) {
      state.memeData = payload
    }
  },
  actions: {
    fetchFollowers({
      commit
    }) {
      axios({
          method: 'GET',
          url: '/api/partner'
        })
        .then(({
          data
        }) => {
          commit('SET_FOLLOWERS', data.data.graphql.user.edge_followed_by)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    },
    fetchPostCount({
      commit
    }) {
      axios({
          method: 'GET',
          url: '/api/partner'
        })
        .then(({
          data
        }) => {
          commit('SET_POSTCOUNT', data.data.graphql.user.edge_owner_to_timeline_media)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    },
    fetchPost({
      commit
    }) {
      axios({
          method: 'GET',
          url: '/api/partner'
        })
        .then(({
          data
        }) => {
          commit('SET_POST', data.data.graphql.user.edge_owner_to_timeline_media.edges)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    },
    fetchCelebBirthday({
      commit
    }) {
      axios({
          method: 'GET',
          url: '/api/celebBirth',
        })
        .then(({
          data
        }) => {
          commit('SET_CELEBBIRTH', data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    },
    memeGenerator({
      commit
    }) {
      axios({
          method: 'GET',
          url: '/api/meme',
        })
        .then(({
          data
        }) => {
          commit('SET_MEME', data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  },
  modules: {}
})
