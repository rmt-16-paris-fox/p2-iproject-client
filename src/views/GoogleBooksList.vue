<template>
  <div>
    <nav-bar></nav-bar>
    <br>

    <div class="container">
      <input
        type="text"
        class="form-control"
        id=""
        placeholder="Title"
        v-on:input="fetchGoogleBooks"
        v-model="searchTitle"
        ><br>

        <input
        type="text"
        class="form-control"
        id=""
        placeholder="Author"
        v-on:input="fetchGoogleBooks"
        v-model="searchAuthor"
        >
      <br>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <google-book-card
          v-for="(googleBook, index) in googleBooks"
          v-bind:key="index"
          v-bind:googleBook="googleBook"
        ></google-book-card>
      </div>
  </div>

  </div>
</template>

<script>
import { debounce } from 'vue-debounce';
import CardGoogleBook from '../components/CardGoogleBook.vue';
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      searchTitle: '',
      searchAuthor: '',
    };
  },
  components: {
    'google-book-card': CardGoogleBook,
    'nav-bar': Navbar,
  },
  beforeCreate() {
    this.$store.dispatch('fetchGoogleBooks');
  },
  computed: {
    googleBooks() {
      return this.$store.state.googleBooks.items;
    },
  },
  methods: {
    fetchGoogleBooks() {
      this.$store.dispatch('fetchGoogleBooks', {
        inTitle: this.searchTitle,
        inAuthor: this.searchAuthor,
      });
    },
  },
  created() {
    this.fetchGoogleBooks = debounce(this.fetchGoogleBooks, 1000);
  },
};
</script>

<style>

</style>
