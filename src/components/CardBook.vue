<template>
  <div class="col">
    <div class="card h-100 rounded shadow">
      <img v-bind:src="book.imgUrl" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text"></p>
      </div>
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
};
</script>

<style>
  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
