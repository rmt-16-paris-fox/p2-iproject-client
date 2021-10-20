import Vue from 'vue';
import Vuex from 'vuex';

import axios from '../apis/server';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    googleBooks: [],
    googleBooksEmpty: true,
    resultEmpty: false,
    loggedInUserData: '',
    bookData: '',
    reviewsEmpty: false,
    isLoading: true,
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload;
    },
    SET_BOOOK_DATA(state, payload) {
      state.bookData = payload;
    },
    SET_GOOGLE_BOOKS(state, payload) {
      state.googleBooks = payload;
    },
    SET_GOOGLE_BOOKS_EMPTY(state, payload) {
      state.googleBooksEmpty = payload;
    },
    SET_RESULT_EMPTY(state, payload) {
      state.resultEmpty = payload;
    },
    SET_REVIEWS_EMPTY(state, payload) {
      state.reviewsEmpty = payload;
    },
    SET_LOGGED_IN_USER_DATA(state, payload) {
      state.loggedInUserData = payload;
    },
    SET_ISLOADING(state, payload) {
      state.isLoading = payload;
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
    getLoggedInUserData(context) {
      axios({
        url: '/user-data',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('accessToken'),
        },
      })
        .then((response) => {
          context.commit('SET_LOGGED_IN_USER_DATA', response.data);
        })
        .catch((err) => {
          console.log(err.response.data);
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
          context.commit('SET_ISLOADING', false);
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
          context.commit('SET_GOOGLE_BOOKS', response.data);
          context.commit('SET_GOOGLE_BOOKS_EMPTY', false);

          this.$toasted.global.success_message({
            message: 'books data fetched',
          });
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
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.foundBook.Reviews.length === 0) {
            context.commit('SET_REVIEWS_EMPTY', true);
          } else {
            context.commit('SET_REVIEWS_EMPTY', false);
          }

          context.commit('SET_BOOOK_DATA', response.data);
          context.commit('SET_ISLOADING', false);
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
    deleteReview(context, payload) {
      return axios({
        url: '/reviews',
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('accessToken'),
        },
        data: payload,
      });
    },
    updateReview(context, payload) {
      return axios({
        url: '/reviews',
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('accessToken'),
        },
        data: payload,
      });
    },
    generateShortURL(context, payload) {
      console.log(payload);
      return axios({
        method: 'POST',
        url: '/shorten-url',
        data: payload,
      });
    },
  },
  modules: {},
});
