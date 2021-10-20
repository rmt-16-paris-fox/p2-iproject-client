<template>
<div class="body">
  <nav-bar></nav-bar><br>

  <div class="container" data-aos="fade-up" data-aos-duration="600">
    <div class="container book-detail-grid">

      <div class="cover-and-button">
        <div class="book-cover">

          <div class="card shadow"
          style="width: 12rem;">
            <img v-bind:src="bookData.foundBook.imgUrl"
            class="card-img-top rounded-lg" alt="book-cover">
          </div>

          <br>

          <div class="url-input">
            <h5>Share this page:</h5>
            <div class="input-group mb-3">
              <input type="text" class="form-control"
              v-model="shortenedLink"
              >
              <button class="btn btn-dark text-white" type="button" id="button-addon2"
              v-on:click="copyToClipboard"
              >Copy</button>
            </div>
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
          <div>
            <h1 class="font-weight-bold">{{ bookData.foundBook.title }}</h1>

            <hr>

            <h3 class="lead">
              {{ bookData.foundBook.author }}
            </h3><br>

            <h5><i class="fas fa-star"></i> {{ avgRating }} / 5</h5>

            <hr>

            <p class="book-description"
            v-html="bookData.description"
            >
            </p>

          </div>
        </div>

        <div class="book-reviews row g-2"
        v-if="showReview"
        >
          <review-card
            v-for="review in bookData.foundBook.Reviews"
            v-bind:key="review.id"
            v-bind:review="review"
            v-on:review-updated="findAvgRating"
          ></review-card>

          <div
          class="card text-center shadow"
          v-if="reviewsEmpty"
          data-aos="fade-up" data-aos-duration="600"
          >
            <div class="card-body">
              <h3>
                <i class="fas fa-sad-tear"></i>
              </h3>

              <h5 class="card-title">
                No reviews yet
              </h5>
            </div>
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
import HFooter from 'vue-hacktiv8-footer';
import Button from '../components/Button.vue';
import Navbar from '../components/Navbar.vue';
import ReviewCard from '../components/ReviewCard.vue';

export default {
  data() {
    return {
      shortenedLink: '',
      showReview: false,
      avgRating: '',
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

      this.$toasted.global.success_message({
        message: 'copied to clipboard!',
      });
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
    findAvgRating() {
      let total = 0;
      let count = 0;
      // eslint-disable-next-line no-restricted-syntax
      for (const review of this.bookData.foundBook.Reviews) {
        total += review.rating;
        count += 1;
      }

      this.avgRating = (total / count).toFixed(1);
    },
  },
  computed: {
    bookData() {
      return this.$store.state.bookData;
    },
    reviewsEmpty() {
      return this.$store.state.reviewsEmpty;
    },
  },
  created() {
    this.$store.dispatch('getLoggedInUserData');

    this.$store.dispatch('fetchBookById', {
      volumeId: this.$router.currentRoute.params.volumeId,
    })
      .then(() => {
        this.findAvgRating();
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    if (this.bookData.foundBook) {
      this.noReviews = true;
    }

    this.$store.dispatch('generateShortURL', {
      url: document.URL,
    })
      .then((response) => {
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
    /* justify-content: center; */
    align-items: flex-start;
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

  .body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f9f7f4
;
  }

  .footer {
    margin-top: auto;
  }

  .fa-star {
    color: #ebc334;
  }
</style>
