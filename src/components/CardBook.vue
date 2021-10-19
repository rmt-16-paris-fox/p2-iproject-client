<template>
  <div class="col">
    <div class="card w-50 rounded shadow">
      <img v-bind:src="book.imgUrl" class="card-img-top" alt="">
      <!-- <div class="card-body round"> -->
        <!-- <h5 class="card-title stretched-link"
          v-on:click="showBookDetail"
        >{{ book.title }}</h5> -->
        <a href="" class="stretched-link"
        v-on:click.prevent="showBookDetail"
        ></a>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>

export default {
  props: {
    book: {
      type: Object,
    },
  },
  methods: {
    showBookDetail() {
      this.$router.push(`/book/${this.book.googleBooksId}`);
    },
  },
};
</script>

<style>
  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .stretched-link {
    cursor: pointer;
  }
</style>
