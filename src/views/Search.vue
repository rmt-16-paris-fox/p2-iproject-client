<template>
  <div class="home">
    <div id="nav">
      <a class="text-success">FoodPedia</a> |
      <a>Search Result</a>
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
      <SearchPagination
        :totalPage="foodList.page_count"
        :currentPage="foodList.page"
        :query="query"
      ></SearchPagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FoodCard from "@/components/FoodCard.vue";
import SearchPagination from "@/components/SearchPagination.vue";
export default {
  name: "Search",
  props: [],
  components: {
    FoodCard,
    SearchPagination,
  },
  created() {},
  computed: {
    foodList: function () {
      return this.$store.state.searchQuery;
    },
    query: function () {
      return this.$route.params.query;
    },
  },
};
</script>
