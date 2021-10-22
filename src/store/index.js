import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estateData: [],
    messages: [],
    stateData: [],
  },
  mutations: {
    ESTATE_DATA(state, payload) {
      state.estateData = payload;
    },
    PUSH_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
    CITY_DATA(state, payload) {
      state.stateData = payload;
    },
    GET_MESSAGE(state, payload) {
      state.messages = payload;
    },
  },
  actions: {
    async getEstate({ commit }, { state_code, city }) {
      try {
        let result = await axios({
          method: "GET",
          url: "http://localhost:3000/estate",
          params: {
            state_code,
            city,
          },
        });
        commit("ESTATE_DATA", result.data.properties);
      } catch (err) {
        console.log(err);
      }
    },
    async searchCity({ commit }, payload) {
      try {
        let result = await axios({
          method: "GET",
          url: "http://localhost:3000/city",
          params: {
            searchInput: payload,
          },
        });
        console.log(result.data);
        commit("CITY_DATA", result.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
