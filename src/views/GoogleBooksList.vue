<template>
  <div>
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
      </i>

      <i class="fas fa-stop fa-2x"
        v-if="isPlay"
        v-on:click="triggerVueSpeech"
      ></i>

      <br><br>

      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <google-book-card
            v-for="(googleBook, index) in googleBooks"
            v-bind:key="index"
            v-bind:googleBook="googleBook"
          ></google-book-card>
        </div>

      </div>
  </div>

  </div>
</template>

<script>
import { debounce } from 'vue-debounce';
import CardGoogleBook from '../components/CardGoogleBook.vue';
import Navbar from '../components/Navbar.vue';
// import Button from '../components/Button.vue';
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
    // 'reusable-button': Button,
    'custom-vue-speech': VueSpeech,
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
      });
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
</style>
