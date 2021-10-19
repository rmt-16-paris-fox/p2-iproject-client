<template>
  <div class="body">
    <nav-bar></nav-bar>
    <br>

    <div class="container">

    <custom-vue-speech
    v-on:onTranscriptionEnd="onEnd"
    v-bind:isPlay="isPlay"
    />

    <input
      type="text"
      class="form-control"
      id=""
      placeholder="Title"
      v-on:input="fetchBooks"
      v-model="searchTitle"
      ><br>

    <i class="fas fa-microphone fa-2x"
    v-if="!isPlay"
    v-on:click="triggerVueSpeech"
    >
    </i>

    <i class="fas fa-stop fa-2x"
      v-if="isPlay"
      v-on:click="triggerVueSpeech"
    ></i><br>

      <div
      class="row row-cols-xl-3 row-cols-md-4 g-4 books-list">
        <book-card
          v-for="book in books"
          v-bind:key="book.id"
          v-bind:book="book"
        ></book-card>
      </div>

      <div
      class="empty-page"
      v-if="resultEmpty"
      >
        <div class="card text-center shadow">
          <div class="card-body">
            <h3>
              <i class="fas fa-sad-tear"></i>
            </h3>

            <h5 class="card-title">
              Couldn't find the book you want?
            </h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-light btn-sm ">
              find and add the book
            </a>
          </div>
        </div>
      </div>
  </div>

  <HFooter
  class="footer"
  ></HFooter>
  </div>

</template>

<script>
import { debounce } from 'vue-debounce';
import HFooter from 'vue-hacktiv8-footer';
import Navbar from '../components/Navbar.vue';
import CardBook from '../components/CardBook.vue';
import VueSpeech from '../components/VueSpeech.vue';

export default {
  data() {
    return {
      searchTitle: '',
      startTranscription: false,
      isPlay: false,
    };
  },
  name: 'Home',
  components: {
    'nav-bar': Navbar,
    'book-card': CardBook,
    HFooter,
    'custom-vue-speech': VueSpeech,
  },
  computed: {
    books() {
      return this.$store.state.books.books;
    },
    resultEmpty() {
      return this.$store.state.resultEmpty;
    },
  },
  methods: {
    fetchBooks() {
      this.$store.dispatch('fetchBooks', {
        title: this.searchTitle,
      });
    },
    triggerVueSpeech() {
      this.isPlay = !this.isPlay;
    },
    onEnd({ lastSentence }) {
      // `lastSentence` is the last sentence before the pause
      // `transcription` is the full array of sentences
      this.searchTitle = lastSentence;
      this.fetchBooks();
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

<style>
.body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .footer {
    margin-top: auto;
  }
</style>
