<template>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card w-50 mx-auto rounded shadow"
    data-aos="fade-up" data-aos-duration="600"
    >
      <img v-bind:src="googleBook.volumeInfo.imageLinks.thumbnail" class="card-img-top " alt=""
      v-if="googleBook.volumeInfo.imageLinks.thumbnail"
      >
      <a href="" class="stretched-link"
        v-on:click="showGoogleBookDetail"
        ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    googleBook: {
      type: Object,
    },
  },
  methods: {
    showGoogleBookDetail() {
      console.log(this.googleBook.id);
      this.$router.push(`/google-book/${this.googleBook.id}`);
    },
  },
};
</script>

<style>
</style>
