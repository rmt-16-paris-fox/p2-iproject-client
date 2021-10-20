<template>
<div>
    <div
    v-if="deleted === false && isEdited === false"
    class="card"
    data-aos="fade-up" data-aos-duration="600"
    >
    <div class="card-body">

      <figure class="text-end">
        <blockquote class="blockquote">
          <p class="rating">{{ review.rating }} / 5</p>
          <p>{{ review.content }}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          <i class="fas fa-user-astronaut"></i> {{review.User.username}}
        </figcaption>
      </figure>

      <i
      v-if="isUserOwnReview"
      class="far fa-trash-alt"
      v-on:click="deleteReview"
      style="margin:5px;"
      ></i>

      <i class="far fa-edit"
      v-if="isUserOwnReview"
      v-on:click="showEditReview"
      ></i>
    </div>
  </div>

  <div
    v-if="deleted === false && isEdited === true"
    class="card">
    <div class="card-body">

      <h3>edit your review</h3>
      <form v-on:submit.prevent="updateReview">
        <div class="mb-3">
          <label for="customRange2" class="form-label">Your Rating:</label>
          <input type="range" class="form-range" min="1" max="5"
          v-model="review.rating"
          id="customRange2"
          oninput="this.nextElementSibling.value = this.value"
          >
          <output>{{ review.rating }}</output>
        </div>
        <div class="form-floating">
          <textarea class="form-control"
          placeholder="Leave a comment here" id="floatingTextarea"
          v-model="review.content"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>

        <br>
        <reusable-button
          buttonClass="btn btn-dark text-white submit-edit-btn"
          buttonLabel="Update Review"
          buttonType="submit"
        ></reusable-button>
        <reusable-button
          buttonClass="btn btn-dark text-white"
          buttonLabel="Cancel"
          buttonType="button"
          v-on:handle-click="cancelEdit"
        ></reusable-button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Button from './Button.vue';

export default {
  data() {
    return {
      isUserOwnReview: false,
      deleted: false,
      isEdited: false,
    };
  },
  props: {
    review: {
      type: Object,
    },
  },
  components: {
    'reusable-button': Button,
  },
  methods: {
    deleteReview() {
      this.$store.dispatch('deleteReview', {
        reviewId: this.review.id,
      })
        .then(() => {
          this.deleted = true;

          this.$toasted.global.success_message({
            message: 'review deleted',
          });
        })
        .catch((err) => {
          this.$toasted.global.error_message({
            message: err.response.data.message,
          });
        });
    },
    showEditReview() {
      this.isEdited = true;
    },
    cancelEdit() {
      this.isEdited = false;
    },
    updateReview() {
      this.$store.dispatch('updateReview', {
        reviewId: this.review.id,
        rating: this.review.rating,
        content: this.review.content,
      })
        .then(() => {
          this.isEdited = false;

          this.$toasted.global.success_message({
            message: 'review updated',
          });

          this.$emit('review-updated');
        })
        .catch((err) => {
          this.$toasted.global.error_message({
            message: err.response.data.message,
          });
        });
    },
  },
  created() {
    if (this.loggedInUserData.id === this.review.userId) {
      this.isUserOwnReview = true;
    }
  },
  computed: {
    loggedInUserData() {
      return this.$store.state.loggedInUserData;
    },
  },
};
</script>

<style>
  .username {
    text-align: left;
  }

  .rating {
    text-align: left;
  }

  .submit-edit-btn {
    margin-right: 5px;
  }
</style>
