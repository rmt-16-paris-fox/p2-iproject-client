<template>
  <div class="text-left" style=" min-height: 100vh">
    <navbar class="mx-3"></navbar>
    <div class="row mx-1" style="padding-top: 110px">
      <div class="col-6 offset-1">
        <div class="row">
          <div class="offset-5">
            <span v-for="meal in recipeById.mealType" :key="meal">{{
              meal
            }}</span>
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
            <i class="fas fa-star text-warning" v-for="idx in 5" :key="idx"></i>
            5.0 / 5.0 from 10 users <br />
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
              <i
                class="fas fa-star fa-2x text-warning mx-2"
                v-for="idx in 5"
                :key="idx"
              ></i
              ><br /><br />
              Rate this Recipe
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
      <div class="col-4" style="padding-top: 128px;">
        <div class="card shadow" style="min-height:70vh">
          <div class="card-header">
            <h4>Comments</h4>
          </div>
          <div class="card-body">
            <p>Helloooo</p>
          </div>
          <div class="card-footer">
            <form action="">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type anything you want to disquss"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-success">
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
import Navbar from "../components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
import Swal from "sweetalert2";
import { swalSuccess, swalError, swalLoading } from "../apis/sweetAlert";

export default {
  name: "RecipeDetail",
  components: {
    Navbar,
    HFooter
  },
  methods: {
    getCal(calories, serving) {
      const kcal = calories / serving;
      return kcal.toFixed(0);
    },

    getRecipeById(recipeId) {
      const loading = this.$store
        .dispatch("getDetailRecipe", { recipeId })
        .then(response => {
          Swal.close();
          console.log(response.data);
          this.$store.commit("SET_RECIPE", { recipeById: response.data });
        })
        .catch(err => {
          Swal.close();
          swalError("", err.response.data.message);
        });

      swalLoading(loading);
    }
  },
  computed: {
    recipeById() {
      return this.$store.state.recipeById;
    }
  },
  created() {
    const recipeId = this.$router.currentRoute.params.id;
    this.getRecipeById(recipeId);
  }
};
</script>

<style></style>
