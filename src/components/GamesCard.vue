<template>
  <div class="col-md-4 mb-3">
    <div class="card">
      <img :src="games.thumbnail" class="card-img-top " alt="Max-width 100%" />
      <div class="card-body">
        <h5 class="card-title">{{ games.title }}</h5>
        <p class="card-text w-100 p-1" style="height: 75px">
          {{ games.short_description }}
        </p>
        <router-link
          :to="{ name: 'DetailPage', params: { id: games.id } }"
          class="btn btn-primary"
          >Detail Page</router-link
        >
        <i class="bi bi-bookmark fs-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesCard",
  props: ["games"]
};
</script>

<style></style>
