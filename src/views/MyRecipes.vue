<template>
  <div class="text-left" style=" min-height: 100vh">
    <navbar class="mx-3"></navbar>
    <div class="text-center mb-4" style="padding-top:110px">
      <h2 class="font-weight-bolder">My Recipes</h2>
    </div>
    <div class="row mx-1" style="min-height:100vh">
      <div class="col-12 mb-4">
        <div
          class="d-flex flex-row flex-wrap justify-content-center"
          v-if="myRecipes.length > 0"
        >
          <div
            class="card shadow mr-3 mb-3"
            style="border-radius: 20px; width:18rem"
            v-for="(recipe, idx) in myRecipes"
            :key="idx"
          >
            <div class="text-center">
              <a href="#" v-on:click.prevent="seeDetail(recipe.uri)">
                <img
                  :src="recipe.image"
                  class="card-img-top"
                  alt="unable to load image"
                  style="height:200px; width:100%;border-radius: 20px 20px 0px 0px"
                />
              </a>
            </div>
            <div class="card-body text-left">
              <div class="row">
                <div class="col-10">
                  <h5 class="card-title mb-1">
                    <strong>{{ recipe.label }}</strong>
                  </h5>
                  <star-rating
                    :rating="5"
                    :read-only="true"
                    :increment="0.01"
                    :star-size="20"
                    :inline="true"
                    :rounded-corners="true"
                    :show-rating="false"
                  ></star-rating>
                </div>
                <div class="col-2">
                  <a
                    href="#"
                    v-on:click.prevent="removeRecipe(recipe.id, recipe.label)"
                    ><i class="fas fa-trash text-danger"></i
                  ></a>
                </div>
              </div>
              <p class="card-text mt-2">
                <!-- {{ product.description }} -->
                <i class="fas fa-stopwatch"></i>
                {{ recipe.totalTime }} minutes <br />
                <i class="fas fa-utensils"></i>
                {{ recipe.yield }} servings <br />
                <i class="fas fa-bolt mb-2"></i>
                {{ getCal(recipe.calories, recipe.yield) }}
                Kcal <br />
                Diet type:
                <span v-if="recipe.dietLabels.length > 0">
                  <span
                    class="badge badge-danger mr-1"
                    v-for="diet in recipe.dietLabels"
                    :key="diet"
                    >{{ diet }}</span
                  >
                  <br />
                </span>
                <span v-else> - <br /> </span>
                Meal Type:
                <span
                  class="font-weight-bolder"
                  v-for="meal in recipe.mealType"
                  :key="meal"
                  >{{ meal }}</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="text-center" v-else>
          You haven't added any recipe yet
        </div>
      </div>
    </div>
    <h-footer class="bottombar mt-3"></h-footer>
  </div>
</template>

<script>
/* eslint-disable */
import StarRating from "vue-star-rating";
import HFooter from "vue-hacktiv8-footer";
import Navbar from "../components/Navbar.vue";
import Swal from "sweetalert2";
import { swalSuccess, swalError, swalLoading } from "../apis/sweetAlert";

export default {
  name: "MyRecipes",
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

    seeDetail(recipeId) {
      recipeId = recipeId.split("#")[1];
      this.$router.push(`/recipe/${recipeId}`);
    },

    getMyRecipes() {
      const loading = this.$store
        .dispatch("getMyRecipes")
        .then(response => {
          Swal.close();
          this.$store.dispatch("setMyRecipes", response.data);
        })
        .catch(err => {
          Swal.close();
          swalError("", err.response.data.message);
        });

      swalLoading(loading);
    },

    removeRecipe(recipeId, recipe) {
      this.$store
        .dispatch("deleteMyRecipe", { recipeId })
        .then(response => {
          swalSuccess("", `${recipe} ${response.data.message}`).then(result => {
            if (result.isConfirmed) {
              this.getMyRecipes();
            }
          });
        })
        .catch(err => {
          swalError("", err.response.data.message);
        });
    }
  },
  computed: {
    myRecipes() {
      return this.$store.state.myRecipes;
    }
  },
  created() {
    this.getMyRecipes();
  }
};
</script>

<style></style>
