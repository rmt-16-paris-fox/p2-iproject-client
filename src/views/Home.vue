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
    </i><br>

    <i class="fas fa-stop fa-2x"
      v-if="isPlay"
      v-on:click="triggerVueSpeech"
    ></i><br>

      <div
      class="row books-list">
        <book-card
          v-for="book in books"
          v-bind:key="book.id"
          v-bind:book="book"
        ></book-card>
      </div>

      <div
      class="empty-page"
      v-if="resultEmpty"
      data-aos="fade-up" data-aos-duration="600"
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
            <router-link
            class="btn btn-light btn-sm"
            to="/google-books"
            >
              find and add the book
            </router-link>
          </div>
        </div>
      </div>

      <br>

      <b-pagination
        size="sm"
        pills
        align="center"
        v-model="page"
        v-bind:total-rows="count"
        v-bind:per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        v-on:change="handlePageChange"
      >
      </b-pagination>
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
      page: 1,
      pageSize: 6,
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
    isLoading() {
      return this.$store.state.isLoading;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    handlePageChange(value) {
      this.$store.commit('SET_PAGE', value);
      // this.$store.dispatch('fetchPosts');
      this.fetchBooks();
    },
    fetchBooks() {
      this.$store.dispatch('fetchBooks', {
        title: this.searchTitle,
        size: 6,
        page: this.$store.state.page,
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
  created() {
    this.$store.dispatch('fetchBooks', {
      title: this.searchTitle,
    });

    this.fetchBooks = debounce(this.fetchBooks, 1000);

    if (this.isLoading === true) {
      this.$toasted.global.info_message({
        message: 'fetching data, please wait',
      });
    }

    if (this.isLoading === false) {
      this.$toasted.global.success_message({
        message: 'books data fetched',
      });
    }
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

  .fa-microphone {
    animation: jiggle 2s infinite ease-in;
  }

  @keyframes jiggle {
    45%, 65% {
      transform: scale(1.0, 1.0)
    }
    50% {
      transform: scale(1.1, 0.9)
    }
    55% {
      transform: scale(0.9, 1.1) translate(0, -5px)
    }
    60% {
      transform: scale(1.0, 1.0) translate(0, -5px)
    }
  }
</style>
