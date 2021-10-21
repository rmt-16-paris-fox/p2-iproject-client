<template>
  <div class="col-md-4 col-sm-6 col-lg-3"
  data-aos="fade-up" data-aos-duration="600"
  >
    <div class="card w-50 mx-auto rounded shadow">
      <img v-bind:src="book.imgUrl" class="card-img-top" alt="">
        <a href="" class="stretched-link"
        v-on:click.prevent="showBookDetail"
        ></a>
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
