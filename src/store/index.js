import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000'
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    matchData: {},
    radiant: [],
    dire: []
  },
  mutations: {
    SET_MATCH_DATA(state, payload) {
      state.matchData = payload;
    },
    SET_RADIANT(state, payload) {
      state.radiant = [...payload.players].splice(0, 5);
    },
    SET_DIRE(state, payload) {
      state.dire = [...payload.players].splice(5, 5);
    }
  },
  actions: {
    async fetchMatchData(context, payload) {
      try {
        const response = await server({
          url: `/matches/${payload}`
        });

        context.commit('SET_MATCH_DATA', response.data);
        context.commit('SET_RADIANT', response.data);
        context.commit('SET_DIRE', response.data);
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {}
});
