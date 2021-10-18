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
      v-on:input="fetchBooks"
      v-model="searchTitle"
      ><br>

      <input
      type="text"
      class="form-control"
      id=""
      placeholder="Author"
      >
    <br>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <book-card
          v-for="book in books"
          v-bind:key="book.id"
          v-bind:book="book"
        ></book-card>
      </div>
  </div>

  </div>

</template>

<script>
import { debounce } from 'vue-debounce';
import Navbar from '../components/Navbar.vue';
import CardBook from '../components/CardBook.vue';

export default {
  data() {
    return {
      searchTitle: '',
    };
  },
  name: 'Home',
  components: {
    'nav-bar': Navbar,
    'book-card': CardBook,
  },
  computed: {
    books() {
      return this.$store.state.books.books;
    },
  },
  methods: {
    fetchBooks() {
      this.$store.dispatch('fetchBooks', {
        title: this.searchTitle,
      });
    },
  },
  beforeCreate() {
    this.$store.dispatch('fetchBooks', {
      title: this.searchTitle,
    });
  },
  created() {
    this.fetchBooks = debounce(this.fetchBooks, 1000);
  },
};
</script>
