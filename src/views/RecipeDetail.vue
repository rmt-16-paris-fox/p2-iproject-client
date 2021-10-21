<template>
  <div class="text-left" style="min-height: 100vh;">
    <navbar class="mx-3"></navbar>
    <div class="row mx-1" style="padding-top: 110px">
      <div class="col-6 offset-1">
        <div class="row">
          <div class="offset-5">
            <span
              class="font-weight-bolder"
              v-for="meal in recipeById.mealType"
              :key="meal"
              >{{ meal }}</span
            >
            <h3 class="font-weight-bolder m-0">
              {{ recipeById.label }}
            </h3>
            <span v-if="recipeById.dietLabels.length > 0">
              <span
                class="badge badge-danger mr-1"
                v-for="diet in recipeById.dietLabels"
                :key="diet"
                >{{ diet }}</span
              >
              <br />
            </span>
            <span v-if="recipeCountRate > 0">
              <star-rating
                :rating="Number(recipeAvgRate)"
                :read-only="true"
                :increment="0.01"
                :star-size="20"
                :inline="true"
                :rounded-corners="true"
                :show-rating="false"
              ></star-rating>
              {{ recipeAvgRate }} / 5.0 from {{ recipeCountRate }} users <br />
            </span>
            <span v-else>
              <star-rating
                :rating="0"
                :read-only="true"
                :increment="0.01"
                :star-size="20"
                :inline="true"
                :rounded-corners="true"
                :show-rating="false"
              ></star-rating>
              not rated yet
            </span>
          </div>
        </div>
        <div class="card shadow mt-3" style="min-height: 100vh">
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <div class="text-left">
                  <img
                    style="width:250px; margin-top:-125px"
                    :src="recipeById.image"
                    class="rounded-circle"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-6 offset-1">
                <span
                  class="badge badge-success mr-1"
                  v-for="health in recipeById.healthLabels"
                  :key="health"
                  >{{ health }}</span
                >
              </div>
            </div>
            <div class="text-center mt-4">
              <star-rating
                :star-size="40"
                :inline="true"
                :rounded-corners="true"
                :animate="true"
                :show-rating="false"
                :rating="Number(recipeMyRate)"
                @rating-selected="setRating"
              ></star-rating>
              <br />
              <span class="mt-3" v-if="recipeMyRate === 0">
                Rate This Recipe
              </span>
              <span class="mt-3" v-else>
                You already rate this recipe
              </span>
            </div>
            <div class="row mt-4">
              <div class="col-3 border-right">
                <i class="fas fa-stopwatch"></i>
                &nbsp;{{ recipeById.totalTime }} minutes <br />
                <i class="fas fa-utensils"></i>
                &nbsp;{{ recipeById.yield }} servings
                <br />
                <i class="fas fa-bolt"></i>
                &nbsp;{{ getCal(recipeById.calories, recipeById.yield) }}
                calories
              </div>
              <div class="col-9">
                <h4>Ingredients</h4>
                <div
                  class="custom-control custom-checkbox"
                  v-for="(ingredient, idx) in recipeById.ingredientLines"
                  :key="idx"
                >
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :value="idx"
                    :id="idx"
                  />
                  <label class="custom-control-label" :for="idx">{{
                    ingredient
                  }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-4 offset-7 fixed-top"
        style="padding-top: 100px; z-index:0"
      >
        <div class="card shadow" style="min-height:70vh">
          <div class="card-header">
            <h4 class="font-weight-bolder">Live Chat</h4>
          </div>
          <div
            class="card-body overflow-auto"
            style="height:45vh; vertical-align:bottom"
            id="card-body"
          >
            <div class="mb-1" v-for="(message, idx) in messages" :key="idx">
              <strong
                :class="
                  message.user === userdata.name ? 'float-right' : 'float-left'
                "
                style="font-size: 11pt"
                >{{
                  message.user === userdata.name ? "You" : message.user
                }}</strong
              ><br />
              <div
                :class="
                  message.user === userdata.name
                    ? 'd-flex flex-row-reverse bd-highlight'
                    : 'd-flex flex-row bd-highlight'
                "
              >
                <div
                  :class="
                    message.user === userdata.name
                      ? 'btn btn-secondary btn-sm'
                      : 'btn btn-success btn-sm'
                  "
                  style="font-size:12pt"
                >
                  {{ message.message }}
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <form v-on:submit.prevent="sendMessage">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="
                    userdata.name ? 'type anything' : 'you must login first'
                  "
                  aria-describedby="basic-addon2"
                  v-model="message"
                  :disabled="!userdata.name"
                />
                <div class="input-group-append">
                  <button
                    type="submit"
                    class="btn btn-success"
                    :disabled="!userdata.name"
                  >
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <h-footer class="bottombar mt-3"></h-footer>
  </div>
</template>

<script>
/* eslint-disable */
import io from "socket.io-client";
import HFooter from "vue-hacktiv8-footer";
import StarRating from "vue-star-rating";
import Navbar from "../components/Navbar.vue";
import Swal from "sweetalert2";
import { swalSuccess, swalError, swalLoading } from "../apis/sweetAlert";

export default {
  name: "RecipeDetail",
  data() {
    return {
      message: "",
      messages: [],
      // socket: io("http://localhost:3000")
      socket: io("https://our-99recipes-api.herokuapp.com")
    };
  },
  components: {
    Navbar,
    HFooter,
    StarRating
  },
  methods: {
    getCal(calories, serving) {
      const kcal = calories / serving;
      return kcal.toFixed(0);
    },

    setRating(rating) {
      const recipeId = this.recipeById.uri.split("#")[1];
      const loading = this.$store
        .dispatch("rateRecipe", {
          recipeId,
          rating,
          recipeName: this.recipeById.label
        })
        .then(response => {
          Swal.close();
          // console.log(response.data);
          if (response.data.message === "updated") {
            swalSuccess(
              "",
              `Your rating to ${response.data.recipe} recipe successfully updated`
            );
          } else {
            swalSuccess(
              "",
              `Your rating to ${response.data.recipe} recipe successfully added`
            );
          }

          this.getRecipeAvgRate(recipeId);
          this.getRecipeMyRate(recipeId);
        })
        .catch(err => {
          Swal.close();
          swalError("", err.response.data.message);
        });

      swalLoading(loading);
    },

    getRecipeById(recipeId) {
      const loading = this.$store
        .dispatch("getDetailRecipe", { recipeId })
        .then(response => {
          Swal.close();
          // console.log(response.data);
          this.$store.commit("SET_RECIPE", { recipeById: response.data });
          this.getRecipeAvgRate(recipeId);

          if (localStorage.getItem("access_token")) {
            this.getRecipeMyRate(recipeId);
            console.log(this.userdata.name);
            this.socket.emit("JOIN_ROOM", recipeId, this.userdata.name);
          }
        })
        .catch(err => {
          Swal.close();
          swalError("", err.response.data.message);
        });

      swalLoading(loading);
    },

    getRecipeAvgRate(recipeId) {
      this.$store.dispatch("getRecipeAvgRate", { recipeId });
    },

    getRecipeMyRate(recipeId) {
      this.$store.dispatch("getRecipeMyRate", { recipeId });
    },

    sendMessage() {
      const recipeId = this.recipeById.uri.split("#")[1];
      this.socket.on("connection", socket => {});
      this.socket.emit("SEND_MESSAGE", recipeId, {
        username: this.userdata.username,
        user: this.userdata.name,
        message: this.message
      });

      const cardBody = document.getElementById("card-body");
      cardBody.scrollTop = cardBody.scrollHeight + 150;
      this.message = "";
    }
  },
  computed: {
    userdata() {
      return this.$store.state.userdata;
    },
    recipeById() {
      return this.$store.state.recipeById;
    },

    recipeAvgRate() {
      const avgRate = Number(this.$store.state.recipeByIdRate).toFixed(1);
      return avgRate;
    },

    recipeCountRate() {
      const count = Number(this.$store.state.recipeByIdCount);
      return count;
    },

    recipeMyRate() {
      const myRate = Number(this.$store.state.recipeMyRate);
      return myRate;
    }
  },
  mounted() {
    this.socket.on("MESSAGE", data => {
      this.messages.push(data);
    });
  },
  created() {
    const recipeId = this.$router.currentRoute.params.id;
    this.getRecipeById(recipeId);
  }
};
</script>

<style></style>
