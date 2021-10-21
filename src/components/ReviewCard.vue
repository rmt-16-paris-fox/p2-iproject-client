<template>
  <div class="col-4 mb-3">
    <div class="card p-3 rounded-3" style="width: 18rem">
      <img :src="review.image" class="card-img-top" alt="no image" />
      <div class="card-body">
        <h5 class="card-title">{{ review.productName }}</h5>
        <p class="card-text">{{ review.review }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/apis/server.js";
import Swal from "sweetalert2";
export default {
  name: "ReviewCard",
  props: ["review"],
  methods: {
    addFavourite: function () {
      if (!localStorage.getItem("access_token")) {
        Swal.fire("you must login.");
        return;
      }
      axios({
        method: "POST",
        url: "/favourite",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          foodCode: this.review.code,
          productName: this.review.product_name || this.review.categories,
          image: this.review.image_small_url,
          description: this.review.ingredients_text,
        },
      })
        .then((data) => {
          console.log(data);
          Swal.fire("Added to favourite");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
  },
  created() {},
};
</script>

<style scoped>
img {
  max-height: 250px;
}
</style>
