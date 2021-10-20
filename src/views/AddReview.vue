<template>
  <div>
    <nav-bar></nav-bar><br>

    <div class="container">
      <form v-on:submit.prevent="addNewReview">
        <div class="mb-3">
          <label for="customRange2" class="form-label">Your Rating:</label>
          <input type="range" class="form-range" min="1" max="5"
          v-model="rating"
          id="customRange2"
          oninput="this.nextElementSibling.value = this.value"
          >
          <output>3</output>
        </div>
        <div class="form-floating">
          <textarea class="form-control"
          placeholder="Leave a comment here" id="floatingTextarea"
          v-model="content"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>

        <br>
        <reusable-button
          buttonClass="btn btn-dark text-white"
          buttonLabel="Submit Review"
          buttonType="submit"
        ></reusable-button>
      </form>

    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Button from '../components/Button.vue';

export default {
  data() {
    return {
      rating: '',
      content: '',
    };
  },
  components: {
    'nav-bar': Navbar,
    'reusable-button': Button,
  },
  methods: {
    addNewReview() {
      console.log(this.rating, this.content);
      console.log(this.$router.currentRoute.params.bookId);
      this.$store.dispatch('addNewReview', {
        rating: this.rating,
        content: this.content,
        bookId: this.$router.currentRoute.params.bookId,
      })
        .then(() => {
          this.$toasted.global.success_message({
            message: 'successfully posted review',
          });

          this.$router.go(-1);
        })
        .catch((err) => {
          this.$toasted.global.error_message({
            message: err.response.data.message,
          });
        });
    },
  },
};
</script>

<style>

</style>
