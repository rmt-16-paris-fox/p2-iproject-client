<template>
  <div class="card">
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
  </div>
</div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
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
</style>
