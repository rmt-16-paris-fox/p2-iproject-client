import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estateData: [],
    messages: [],
  },
  mutations: {
    ESTATE_DATA(state, payload) {
      state.estateData = payload;
    },
    PUSH_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
  },
  actions: {
    async getEstate({ commit }) {
      try {
        let result = await axios({
          method: "GET",
          url: "http://localhost:3000/estate",
          params: {
            state_code: "NY",
            city: "new york",
          },
        });
        commit("ESTATE_DATA", result.data.properties);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
