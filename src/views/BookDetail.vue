<template>
<div>
  <nav-bar></nav-bar><br>

  <div class="container">
    <div class="container book-detail-grid">

      <div class="cover-and-button">
        <div class="book-cover">

          <div class="card shadow"
          style="width: 12rem;">
            <img v-bind:src="bookData.foundBook.imgUrl"
            class="card-img-top rounded-lg" alt="book-cover">
          </div>

          <br>

          <h5>Share this page:</h5>
          <div class="input-group mb-3">
            <input type="text" class="form-control"
            v-model="shortenedLink"
            >
            <button class="btn btn-dark text-white" type="button" id="button-addon2"
            v-on:click="copyToClipboard"
            >Copy</button>
          </div>

          <reusable-button
            buttonLabel="Review this Book"
            buttonClass="btn btn-dark text-white"
            butonType="button"
            v-on:handle-click="toAddReviewPage"
          ></reusable-button><br>
        </div>

      </div>

      <div class="book-detail">
        <div>
          <a
          class="description-toggle"
          v-on:click.prevent="closeReviewSection"
          >Description</a> | <a
          class="review-toggle"
          v-on:click.prevent="showReviewSection">Reviews</a>
        </div><br>

        <div class="book-detail-content"
        v-if="showReview === false"
        >
          <h1 class="font-weight-bold">{{ bookData.foundBook.title }}</h1>

          <hr>

          <h3 class="lead">
            {{ bookData.foundBook.author }}
          </h3><br>

          <p class="book-description"
          v-html="bookData.description"
          >
          </p>
        </div>

        <div class="book-reviews"
        v-if="showReview"
        >
          <review-card
            v-for="review in bookData.foundBook.Reviews"
            v-bind:key="review.id"
            v-bind:review="review"
          ></review-card>
        </div>
      </div>

    </div>
  </div>
  <HFooter></HFooter>
</div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer';
import Button from '../components/Button.vue';
import Navbar from '../components/Navbar.vue';
import ReviewCard from '../components/ReviewCard.vue';

export default {
  data() {
    return {
      bookData: '',
      shortenedLink: '',
      showReview: false,
    };
  },
  components: {
    'reusable-button': Button,
    'nav-bar': Navbar,
    'review-card': ReviewCard,
    HFooter,
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.shortenedLink);
    },
    toAddReviewPage() {
      this.$router.push(`/add-review/${this.bookData.foundBook.id}`);
    },
    showReviewSection() {
      this.showReview = true;
    },
    closeReviewSection() {
      this.showReview = false;
    },
  },
  created() {
    this.$store.dispatch('fetchBookById', {
      volumeId: this.$router.currentRoute.params.volumeId,
    })
      .then((response) => {
        console.log(response.data);
        this.bookData = response.data;
      })
      .catch((err) => {
        console.log(err.responsed.data);
      });

    this.$store.dispatch('generateQRCode', {
      url: 'https://phase-2-challenge-3-customer.web.app/book/x_7AwAEACAAJ',
    })
      .then((response) => {
        console.log(response.data);
        this.shortenedLink = response.data.result.short_link;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },
};
</script>

<style>
  .book-detail-grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .cover-and-button {
    display: flex;
    justify-content: center;
  }

  .description-toggle {
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  .review-toggle {
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
</style>
