<template>
  <div class="col-4 mb-3">
    <div class="card p-3 rounded-3" style="width: 18rem">
      <a>{{ productName }}</a>
      <img :src="food.image" class="card-img-top" alt="no image" />
      <div class="card-body">
        <h5 class="card-title">{{ food.productName }}</h5>
        <p class="card-text">
          {{ food.description }}
        </p>
        <p class="card-text">{{ food.foodCode }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/apis/server.js";
import Swal from "sweetalert2";
export default {
  name: "FavouriteCard",
  props: ["food"],
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
          foodCode: this.food.code,
          productName: this.food.product_name || this.food.categories,
          image: this.food.image_small_url,
          description: this.food.ingredients_text,
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
};
</script>

<style scoped>
img {
  max-height: 250px;
}
</style>
