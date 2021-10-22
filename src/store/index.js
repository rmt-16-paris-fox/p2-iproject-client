import axios from "../apis/axios";
import freeToGame from "../apis/freeToGame";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    gamesData: [],
    gamesDetail: []
  },
  mutations: {
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_USERDATA(state, payload) {
      state.userData = payload;
    },
    SET_GAMESDATA(state, payload) {
      state.gamesData = payload;
    },
    SET_GAMESDETAIL(state, payload) {
      state.gamesDetail = payload;
    }
  },
  actions: {
    submitLogin(context, payload) {
      return axios({
        method: "POST",
        url: "/users/login",
        data: payload
      });
    },
    submitRegister(context, payload) {
      return axios({
        method: "POST",
        url: "/users/register",
        data: payload
      });
    },
    googleLogin(context, idToken) {
      return axios({
        method: "POST",
        url: "/users/authGoogle",
        data: { idToken }
      });
    },
    submitYoutube(context, payload) {
      console.log(payload)
      return axios({
        method: "GET",
        url: `/games/youtube/${payload}`,
      });
      
    },
    // fetchGamesApi(context) {
    //   return freeToGame({
    //     method: "GET",
    //     url: "/apis",
    //       params: { "sort-by": "id" },
    //       headers: {
    //         "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    //         "x-rapidapi-key": "51a2719ae4msh8b33cad0050133fp1df56ajsn308e081b9a18",
    // },
    fetchGames(context, payload) {
      return axios({
        method: "GET",
        url: `/games/paginations?pageNumber=${payload.pageNumber}&pageLimit=${payload.pageLimit}&title=${payload.title}&genre=${payload.genre}&platform=${payload.platform}`
      });
    },
    fetchGamesDetail(context, id) { //from API database
      return freeToGame({
        method: "GET",
				url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
				params: { id },
				headers: {
					"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
					"x-rapidapi-key": "51a2719ae4msh8b33cad0050133fp1df56ajsn308e081b9a18",
				}
      })
    },
    fetchUser(context) {
      return axios({
        method: "GET",
        url: "/users/userData",
        headers: {
          access_token: localStorage.access_token
        }
      });
    }
  },
  modules: {}
});
