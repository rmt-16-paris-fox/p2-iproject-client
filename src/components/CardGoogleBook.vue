<template>
  <div class="col">
    <div class="card w-50 rounded shadow">
      <img v-bind:src="googleBook.volumeInfo.imageLinks.thumbnail" class="card-img-top " alt="">
      <!-- <div class="card-body">
        <h5 class="card-title stretched-link"
        v-on:click="showGoogleBookDetail"
        >{{ googleBook.volumeInfo.title }}</h5>
        <p class="card-text"></p>
      </div> -->
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
