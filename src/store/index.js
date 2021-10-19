import Vue from 'vue';
import Vuex from 'vuex';

import axios from '../apis/server';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    googleBooks: [],
    resultEmpty: false,
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload;
    },
    SET_GOOGLE_BOOKS(state, payload) {
      state.googleBooks = payload;
    },
    SET_RESULT_EMPTY(state, payload) {
      state.resultEmpty = payload;
    },
  },
  actions: {
    login(context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: payload,
      });
    },
    register(context, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: payload,
      });
    },
    fetchBooks(context, payload) {
      console.log(payload);
      axios({
        url: '/books',
        method: 'GET',
        params: payload,
      })
        .then((books) => {
          console.log(books.data);
          if (books.data.totalItems === 0) {
            context.commit('SET_RESULT_EMPTY', true);
          } else {
            context.commit('SET_RESULT_EMPTY', false);
          }

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
    addNewBook(context, payload) {
      return axios({
        url: '/books',
        method: 'POST',
        data: payload,
      });
    },
    fetchBookById(context, payload) {
      return axios({
        url: `/books/${payload.volumeId}`,
        method: 'POST',
        data: {
          volumeId: payload.volumeId,
        },
      });
    },
    fetchBookByVolumeId(context, payload) {
      return axios({
        url: '/google-books-by-id',
        method: 'POST',
        data: payload,
      });
    },
    addNewReview(context, payload) {
      return axios({
        url: '/reviews',
        method: 'POST',
        data: payload,
        headers: {
          access_token: localStorage.getItem('accessToken'),
        },
      });
    },
    generateQRCode(context, payload) {
      console.log(payload);
      return axios({
        method: 'GET',
        url: `https://api.shrtco.de/v2/shorten?url=${payload.url}`,
      });
    },
  },
  modules: {},
});
