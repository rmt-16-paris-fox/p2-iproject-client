import Vue from 'vue';
import Vuex from 'vuex';

import axios from '../apis/server';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    googleBooks: [],
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload;
    },
    SET_GOOGLE_BOOKS(state, payload) {
      state.googleBooks = payload;
    },
  },
  actions: {
    fetchBooks(context, payload) {
      console.log(payload);
      axios({
        url: '/books',
        method: 'GET',
        params: payload,
      })
        .then((books) => {
          console.log(books.data);
          context.commit('SET_BOOKS', books.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    fetchGoogleBooks(context, payload) {
      axios({
        url: '/google-books',
        method: 'POST',
        data: {
          inTitle: payload.inTitle,
          inAuthor: payload.inAuthor,
        },
      })
        .then((response) => {
          console.log(response.data);
          context.commit('SET_GOOGLE_BOOKS', response.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
  modules: {
  },
});
