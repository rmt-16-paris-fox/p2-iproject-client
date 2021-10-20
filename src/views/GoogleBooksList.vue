<template>
  <div class="body">
    <nav-bar></nav-bar>
    <br>

    <div
    >
      <!-- <h1>vue speech</h1> -->
      <custom-vue-speech
      v-on:onTranscriptionEnd="onEnd"
      v-bind:isPlay="isPlay"
      />

    </div>

    <div class="container">
      <input
      type="text"
      class="form-control"
      id=""
      placeholder="Search the title you wanted"
      v-on:input="fetchGoogleBooks"
      v-model="searchTitle"
      ><br>

      <i class="fas fa-microphone fa-2x"
      v-if="!isPlay"
      v-on:click="triggerVueSpeech"
      >
      </i><br>

      <i class="fas fa-stop fa-2x"
        v-if="isPlay"
        v-on:click="triggerVueSpeech"
      ></i><br>

      <br><br>

      <div class="container">
        <div class="row g-4">
          <google-book-card
            v-for="(googleBook, index) in googleBooks"
            v-bind:key="index"
            v-bind:googleBook="googleBook"
          ></google-book-card>
        </div>

        <div
      class="empty-page"
      v-if="googleBooksEmpty"
      data-aos="fade-up" data-aos-duration="600"
      >
        <div class="card text-center shadow">
            <div class="card-body">
              <h3>
                <i class="fas fa-search"></i>
              </h3>

              <h5 class="card-title">
                Search for the book title you want
              </h5>
              <p class="card-text">
                feel free to try our speech recognition feature <i class="far fa-grin-beam"></i>
              </p>
            </div>
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
import CardGoogleBook from '../components/CardGoogleBook.vue';
import Navbar from '../components/Navbar.vue';
import VueSpeech from '../components/VueSpeech.vue';

export default {
  data() {
    return {
      searchTitle: '',
      searchAuthor: '',
      startTranscription: false,
      isPlay: false,
      micIcon: '<i class="fas fa-microphone"></i>',
    };
  },
  components: {
    'google-book-card': CardGoogleBook,
    'nav-bar': Navbar,
    HFooter,
    'custom-vue-speech': VueSpeech,
  },
  computed: {
    googleBooks() {
      return this.$store.state.googleBooks.items;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    googleBooksEmpty() {
      return this.$store.state.googleBooksEmpty;
    },
  },
  methods: {
    fetchGoogleBooks() {
      if (this.searchTitle) {
        this.$store.dispatch('fetchGoogleBooks', {
          inTitle: this.searchTitle,
        });
      }
    },
    triggerVueSpeech() {
      this.isPlay = !this.isPlay;
    },
    onEnd({ lastSentence }) {
      // `lastSentence` is the last sentence before the pause
      // `transcription` is the full array of sentences
      this.searchTitle = lastSentence;
      this.fetchGoogleBooks();
    },
  },
  created() {
    this.fetchGoogleBooks = debounce(this.fetchGoogleBooks, 1000);
  },
};
</script>

<style>
  .fa-stop {
    color: red;
    cursor: pointer;
  }

  .fa-microphone {
    color: black;
    cursor: pointer;
  }

  .body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .footer {
    margin-top: auto;
  }
</style>
