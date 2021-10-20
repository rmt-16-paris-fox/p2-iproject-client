/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginErr: "",
    registerErr: [],
    userdata: {},
    recipes: [],
    loadMore: ""
  },
  mutations: {
    SET_LOGINERR(state, payload) {
      state.loginErr = payload.err;
    },

    SET_REGISTERERR(state, payload) {
      state.registerErr = payload.err;
    },

    SET_USERDATA(state, payload) {
      state.userdata = payload.userdata;
    },

    REMOVE_USERDATA(state, payload) {
      state.userdata = {};
    },

    SET_RECIPES(state, payload) {
      state.recipes = payload.recipes;
    },

    SET_LOAD_MORE(state, payload) {
      state.loadMore = payload.loadMore;
    },

    PUSH_NEW_RECIPE(state, payload) {
      state.recipes.push(payload.recipe);
    }
  },
  actions: {
    async login(context, payload) {
      const result = await axios({
        method: "POST",
        url: "/login",
        data: payload
      });

      return result;
    },

    loginErr(context, payload) {
      context.commit("SET_LOGINERR", { err: payload });
    },

    async loginGoogle(context, payload) {
      const result = await axios({
        method: "POST",
        url: "/google-login",
        data: {
          token: payload
        }
      });

      return result;
    },

    async register(context, payload) {
      const result = await axios({
        method: "POST",
        url: "/register",
        data: payload
      });

      return result;
    },

    registerErr(context, payload) {
      context.commit("SET_REGISTERERR", { err: payload });
    },

    async getUserData(context, payload) {
      const result = await axios({
        url: "/user-data",
        headers: {
          access_token: payload
        }
      });

      return result;
    },

    setUserData(context, payload) {
      context.commit("SET_USERDATA", { userdata: payload });
    },

    removeUserData(context) {
      context.commit("REMOVE_USERDATA");
    },

    async submitFilter(context, payload) {
      const result = await axios({
        method: "POST",
        url: "/recipes",
        data: payload
      });

      return result;
    },

    async getDetailRecipe(context, payload) {
      console.log(payload.recipeId);
      const result = await axios({
        url: `/recipes/recipeDetail/${payload.recipeId}`
      });

      return result;
    },

    async loadMoreRecipe(context, payload) {
      const result = await axios({
        url: payload.loadMore
      });

      return result;
    }
  },
  modules: {}
});
