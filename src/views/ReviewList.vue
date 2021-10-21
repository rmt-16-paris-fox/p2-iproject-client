<template>
  <div>
    <div id="nav">
      <a class="text-success">FoodPedia</a> |
      <a>Review list page</a>
    </div>
    <div class="container my-4">
      <div class="row">
        <ReviewCard
          v-for="(review, index) in Review.response"
          :key="index"
          :review="review"
        ></ReviewCard>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewCard from "@/components/ReviewCard.vue";
export default {
  name: "ReviewList",
  data: function () {
    return {
      //   foodCode: "",
    };
  },
  components: {
    ReviewCard,
  },
  created() {
    this.$store.dispatch("fetchReviews");
  },
  computed: {
    Review: function () {
      return this.$store.state.reviewQuery;
    },
    // image: function () {
    //   return this.$route.params.image;
    // },
    // name: function () {
    //   return this.$route.params.name;
    // },
    // desc: function () {
    //   return this.$route.params.desc;
    // },
  },
};
</script>

<style></style>
