<template>
  <div class="home">
    <div id="nav">
      <a class="text-success">FoodPedia</a> |
      <a>Homepage</a>
    </div>
    <div class="container my-4">
      <div class="row">
        <FoodCard
          v-for="(food, index) in foodList.products"
          :key="index"
          :food="food"
        ></FoodCard>

        <!-- <pre>{{ foodList }}</pre> -->
      </div>
      <Pagination
        :totalPage="foodList.page_count"
        :currentPage="foodList.page"
      ></Pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FoodCard from "@/components/FoodCard.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "Home",
  components: {
    FoodCard,
    Pagination,
  },
  created() {
    this.$store.dispatch("fetchFoods");
    this.$store.dispatch("pagination", 1);
  },
  computed: {
    foodList: function () {
      return this.$store.state.foodQuery;
    },
  },
};
</script>
