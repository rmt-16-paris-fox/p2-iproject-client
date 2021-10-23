
  
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vocabularies: [],
  },
  mutations: {
    CHANGE_VOCABULARY(state, payload) {
      state.vocabularies = payload
    },
  },
  actions: {
    async fetchVaccine() {
      try {
        const response = await axios({
          url: "https://vaksincovid19-api.vercel.app/api/vaksin",
          method: "GET",
        })
        const result = response.data;
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchData() {
      try {
        const response = await axios({
          url: "https://api.kawalcorona.com/indonesia/provinsi",
          method: "GET",
        })
        const result = response.data;
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchNews() {
      try {
        const response = await axios({
          url: "https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=90448fc16d714c4e97e8768b8b7aebda",
          method: "GET",
        })
        const result = response.data;
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    },
    async dictionary(context, payload) {
      let temp1 = [];
      let temp2 = [];
      try {
        const response = await axios({
          url: `https://new-kbbi-api.herokuapp.com/cari/${payload}`,
          method: "GET",
        })
        for (const key of response.data.data) {
          let obj = { arti: ""};
          obj.arti = key.arti;
          temp1.push(obj);
        }
        for (const key of temp1) {
          let clas = "";
          let desc = "";
          let id = 0;
          for (const a of key.arti) {
            clas = a["kelas_kata"];
            id += 1;
            desc +=  "\n" + `${id}. ${a.deskripsi}`;
          }
          let obj = { kelas: `${clas}`, deskripsi: `${desc}` };
          temp2.push(obj)
        }
        const result = temp2;
        context.commit("CHANGE_VOCABULARY", result)
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})

