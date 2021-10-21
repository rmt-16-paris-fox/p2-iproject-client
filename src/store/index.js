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
    loadMore: "",
    myRecipes: [],
    recipeById: {},
    recipeByIdRate: "",
    recipeByIdCount: "",
    recipeMyRate: ""
  },
  mutations: {
    SET_LOGINERR(state, payload) {
      state.loginErr = payload.err;
    },

    REMOVE_LOGINERR(state, payload) {
      state.loginErr = "";
    },

    SET_REGISTERERR(state, payload) {
      state.registerErr = payload.err;
    },

    REMOVE_REGISTERERR(state, payload) {
      state.registerErr = [];
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
    },

    SET_MY_RECIPES(state, payload) {
      state.myRecipes = payload.myRecipes;
    },

    SET_RECIPE(state, payload) {
      state.recipeById = payload.recipeById;
    },

    SET_RECIPE_AVG_RATE(state, payload) {
      state.recipeByIdRate = payload.avgRate;
      state.recipeByIdCount = payload.count;
    },

    SET_RECIPE_MY_RATE(state, payload) {
      state.recipeMyRate = payload.rate;
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
      const result = await axios({
        url: `/recipes/recipeDetail/${payload.recipeId}`
      });

      return result;
    },

    async getRecipeAvgRate(context, payload) {
      const result = await axios({
        url: `/recipes/recipeAvgRate/${payload.recipeId}`
      });

      const avgRate = result.data.avg;
      const count = result.data.count;
      context.commit("SET_RECIPE_AVG_RATE", { avgRate, count });
    },

    async getRecipeMyRate(context, payload) {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        url: `/recipes/recipeMyRate/${payload.recipeId}`,
        headers: {
          access_token
        }
      });

      const rate = result.data.rate;
      context.commit("SET_RECIPE_MY_RATE", { rate });
    },

    async getMyRecipes(context, payload) {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        url: "/recipes/myRecipes",
        headers: {
          access_token
        }
      });

      // console.log(result.data, ">>>>>>>>>>>>myrecipes in store");
      return result;
    },

    setMyRecipes(context, payload) {
      context.commit("SET_MY_RECIPES", { myRecipes: payload });
    },

    async addMyRecipe(context, payload) {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "POST",
        url: `/recipes/myRecipes/${payload.recipeId}`,
        headers: {
          access_token
        }
      });

      return result;
    },

    async deleteMyRecipe(context, payload) {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "DELETE",
        url: `/recipes/myRecipes/${payload.recipeId}`,
        headers: {
          access_token
        }
      });

      return result;
    },

    async loadMoreRecipe(context, payload) {
      const result = await axios({
        url: payload.loadMore
      });

      return result;
    },

    async rateRecipe(context, payload) {
      console.log(payload);
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "POST",
        url: `/recipes/rateRecipe`,
        headers: {
          access_token
        },
        data: payload
      });

      // console.log(result);
      return result;
    },

    async sendMail(context, payload) {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "POST",
        url: "/recipes/sendRecipes",
        headers: {
          access_token
        },
        data: payload
      });

      return result;
    }
  },
  modules: {}
});
