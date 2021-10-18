<template>
  <div class="col">
    <div class="card h-100 rounded shadow">
      <img v-bind:src="googleBook.volumeInfo.imageLinks.thumbnail" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ googleBook.volumeInfo.title }}</h5>
        <p class="card-text"></p>
      </div>
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
};
</script>

<style>

</style>
