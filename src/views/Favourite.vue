<template>
  <div>
    <div id="nav">
      <a class="text-success">FoodPedia</a> |
      <a>Favourite list page</a>
    </div>
    <div class="container my-4">
      <div class="row">
        <FavouriteCard
          v-for="(food, index) in Favourite.response"
          :key="index"
          :food="food"
        ></FavouriteCard>
      </div>
    </div>
  </div>
</template>

<script>
import FavouriteCard from "@/components/FavouriteCard.vue";
export default {
  name: "Favourite",
  components: {
    FavouriteCard,
  },
  created() {
    this.$store.dispatch("fetchFavourites");
  },
  computed: {
    Favourite: function () {
      return this.$store.state.favouriteQuery;
    },
  },
};
</script>

<style></style>
