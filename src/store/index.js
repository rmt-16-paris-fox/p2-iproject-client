import Vue from "vue";
import Vuex from "vuex";
import axios from "@/apis/server.js";
import Swal from "sweetalert2";
import router from "@/router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    foodQuery: [],
    searchQuery: [],
  },
  mutations: {
    SET_FOOD_QUERY: function (state, payload) {
      state.foodQuery = payload;
    },
    SET_SEARCH_QUERY: function (state, payload) {
      state.searchQuery = payload;
    },
    SET_IS_LOGIN: function (state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    voiceSearch: function () {
      axios({
        method: "",
        url: "wss://api.rev.ai/speechtotext/v1/stream?access_token=02wV*",
      });
    },
    fetchFoods: function ({ commit }) {
      axios({
        method: "GET",
        url: "https://world.openfoodfacts.org/?json=true",

        params: {
          page: "1",
        },
      })
        .then(({ data }) => {
          // console.log(data);
          commit("SET_FOOD_QUERY", data);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message || "something wrong",
          });
        });
    },
    pagination: function ({ commit }, page) {
      axios({
        method: "GET",
        url: "https://world.openfoodfacts.org/?json=true",
        params: {
          page: page,
        },
      })
        .then(({ data }) => {
          console.log(data);
          commit("SET_FOOD_QUERY", data);
          // commit("SET_SEARCH_QUERY", data);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message || "something wrong",
          });
        });
    },
    runSearch: function ({ commit }, { search, page }) {
      axios({
        method: "GET",
        url: `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${search}&search_simple=1&action=process&json=true`,
        params: {
          page: page,
        },
      })
        .then(({ data }) => {
          console.log(data);
          commit("SET_SEARCH_QUERY", data);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message || "something wrong",
          });
        });
    },
    login: function ({ commit }, { email, password }) {
      axios({
        method: "POST",
        url: "/login",
        data: {
          email,
          password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          commit("SET_IS_LOGIN", true);
          router.push("/");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message || "something wrong",
          });
        });
    },
    register: function (context, { name, email, password }) {
      axios({
        method: "POST",
        url: "/register",
        data: {
          name,
          email,
          password,
        },
      })
        .then(({ data }) => {
          Swal.fire("Register successful", data);
          router.push("/login");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
  },
  modules: {},
});
