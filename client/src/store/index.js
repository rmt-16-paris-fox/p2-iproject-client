import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogedIn: false,
    groupList: {
      gradeLevel: 1,
      kanjiList: [],
    },
    kanjiDetails: {
      character: "",
      data: {},
    },
    searchResults: [],
    testName: "",
    // {
    //   name: "",
    //   totalQuestion: null,
    //   gradeLevel: null,
    // },
    // socket ii
    socketTest: "",
    /*
    test question and other data recv from server
    */
    test: {
      onProgress: false,
      gradeLevel: null,
      totalQuestion: null,
      // question
    },
    testData: {
      question: "",
      choices: [],
      number: 0,
      ready: false,
    },
    totalTest: null,
    testAnswer: "",
    testAnswerValue: null,
    testScore: 0,
    testType: null,
    testGrade: null,
    /////
    isPremium: false,
  },
  mutations: {
    SET_LOGED_IN: (state, payload) => {
      state.isLogedIn = payload;
    },
    SET_GROUP_LIST: (state, payload) => {
      const keys = Object.keys(payload);
      keys.forEach((k) => {
        state.groupList[k] = payload[k];
      });
    },
    SET_KANJI_DETAILS: (state, payload) => {
      const keys = Object.keys(payload);
      keys.forEach((k) => {
        state.kanjiDetails[k] = payload[k];
      });
    },
    SET_PREMIUM: (state, payload) => {
      state.isPremium = payload;
    },
    SET_SEARCH_RESULT: (state, payload) => {
      state.searchResults = payload;
    },
    SET_TEST_NAME: (state, payload) => {
      state.testName = payload;
    },
    SET_TEST_SCORE: (state, payload) => {
      state.testScore = payload;
    },
    SET_TEST_TYPE: (state, payload) => {
      state.testType = payload;
    },
    SET_TEST_GRADE: (state, payload) => {
      state.testGrade = payload;
    },
    RESET_TEST_ANSWER: (state) => {
      state.testAnswer = "";
      state.testAnswerValue = null;
    },
    SOCKET_TEST_ANSWER_VALUE(state, payload) {
      state.testAnswerValue = payload;
    },
    SOCKET_TEST(state, message) {
      state.socketTest = message;
    },
    SOCKET_TEST_DATA(state, payload) {
      payload.ready = true;
      const n = state.number;
      state.testData = payload;
      state.testData.number = n;
    },
    RESET_TEST_DATA(state) {
      state.testData = {
        question: "",
        choices: [],
        number: 0,
        ready: false,
      };
    },
    INCREMENT_TEST_NUMBER(state) {
      state.testData = state.testData + 1;
    },
    SET_TOTAL_TEST(state, payload) {
      state.totalTest = payload;
    },
    SOCKET_TEST_ANSWER(state, payload) {
      state.testAnswer = payload;
      if (payload === "correct") {
        state.testScore++;
      }
    },
    // SOCKET_SET_QUESTION(state, payload) {
    //   state.
    // }
  },
  actions: {
    // socket io
    emitSocketEvent(data) {
      this._vm.$socket.client.emit("initStartTest", data);
    },
    emitGetQuestion(data) {
      this._vm.$socket.client.emit("initStartTest", data);
    },
    //end test
    async getKanjiByGrade(context, grade) {
      try {
        const result = await axios({
          url: `/kanji/grade/${grade}`,
          method: "GET",
        });

        context.commit("SET_GROUP_LIST", { kanjiList: result.data });
      } catch (err) {
        console.log(err);
      }
    },
    async getKanjiDetails(context, kanji) {
      try {
        console.log("=========== kanji details:", kanji);
        const result = await axios({
          url: `/kanji/${context.state.kanjiDetails.character}`,
          method: "GET",
        });

        context.commit("SET_KANJI_DETAILS", { data: result.data.result });
      } catch (err) {
        console.log(err);
      }
    },
    async search(context, value) {
      try {
        const result = await axios({
          url: `/kanji/search`,
          method: "GET",
          params: {
            value,
          },
        });

        // console.log("search:", result);
        context.commit("SET_SEARCH_RESULT", result.data);
      } catch (err) {
        console.log(err);
      }
    },
    async checkPremium(context) {
      try {
        const token = localStorage.getItem("access_token");
        const result = await axios({
          url: `/premium`,
          method: "GET",
          headers: {
            access_token: token,
          },
        });

        // console.log("search:", result);
        context.commit("SET_PREMIUM", result.data.premium);
      } catch (err) {
        console.log(err);
      }
    },
    // async learnNewKanji(context, count) {
    //   try {
    //     // fetch to server
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
  modules: {},
});
