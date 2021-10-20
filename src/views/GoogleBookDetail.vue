<template>
  <div class="body">
    <nav-bar></nav-bar><br>

    <div class="container book-detail-grid"
    data-aos="fade-up" data-aos-duration="600"
    >

      <div class="cover-and-button">
        <div class="book-cover">

          <div class="card shadow"
          style="width: 12rem;">
            <img
            v-if="googleBookData.volumeInfo"
            v-bind:src="googleBookData.volumeInfo.imageLinks.thumbnail"
            class="card-img-top rounded-lg" alt="book-cover">
          </div>

          <br>

          <reusable-button
            buttonClass="btn btn-dark text-white"
            buttonLabel="Add to Collection"
            buttonType="button"
            v-on:handle-click="addNewBook"
          ></reusable-button>
        </div>

      </div>

      <div class="book-detail">
        <h1 class="font-weight-bold"
        v-if="googleBookData.volumeInfo"
        >{{ googleBookData.volumeInfo.title }}</h1>

        <hr>

        <h3 class="lead"
        v-if="googleBookData.volumeInfo"
        >
          {{googleBookData.volumeInfo.authors.join('') }}
        </h3>

        <p class="book-description"
        v-if="googleBookData.volumeInfo"
        v-html="googleBookData.volumeInfo.description"
        >
        </p>

      </div>

    </div>

  <HFooter
  class="footer"
  ></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer';
import Button from '../components/Button.vue';
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      googleBookData: '',
    };
  },
  components: {
    'reusable-button': Button,
    'nav-bar': Navbar,
    HFooter,
  },
  methods: {
    addNewBook() {
      this.$store.dispatch('addNewBook', {
        volumeId: this.googleBookData.id,
      })
        .then(() => {
          this.$router.push('/');

          this.$toasted.global.success_message({
            message: 'successfully added book',
          });
        })
        .catch(() => {
          this.$toasted.global.error_message({
            message: 'this book is already added to the forum, please check again',
          });
        });
    },
  },
  created() {
    this.$store.dispatch('fetchBookByVolumeId', {
      volumeId: this.$router.currentRoute.params.volumeId,
    })
      .then((response) => {
        console.log(response.data);
        this.googleBookData = response.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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

  .book-detail-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .cover-and-button {
    display: flex;
  }
</style>
