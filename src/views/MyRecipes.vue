<template>
  <div class="text-left" style=" min-height: 100vh">
    <navbar class="mx-3"></navbar>
    <div class="row mx-1" style="padding-top:100px; min-height:100vh">
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
              <img
                :src="recipe.image"
                class="card-img-top"
                alt="unable to load image"
                style="height:200px; width:100%"
              />
            </div>
            <div class="card-body text-left">
              <h5 class="card-title">
                <strong>{{ recipe.label }}</strong>
              </h5>
              <p class="card-text">
                <!-- {{ product.description }} -->
                {{ recipe.yield }} Serving <br />
                {{ getCal(recipe.calories, recipe.yield) }} Kcal
                <br />
                {{ recipe.dietLabels }} <br />
                {{ recipe.mealType }} <br />
                {{ recipe.totalTime }}
              </p>
              <div
                class="d-flex flex-row flex-wrap justify-content-between align-items-center"
              >
                <!-- <span class="text-primary font-weight-bolder">{{
                  product.price
                }}</span>
                <span
                  class="badge badge-pill badge-primary"
                  v-if="product.Category.name === 'T-Shirt'"
                  >{{ product.Category.name }}</span
                >
                <span
                  class="badge badge-pill badge-secondary"
                  v-else-if="product.Category.name === 'Pants'"
                  >{{ product.Category.name }}</span
                >
                <span
                  class="badge badge-pill badge-success"
                  v-else-if="product.Category.name === 'Jacket'"
                  >{{ product.Category.name }}</span
                >
                <span
                  class="badge badge-pill badge-danger"
                  v-else-if="product.Category.name === 'Outer'"
                  >{{ product.Category.name }}</span
                >
                <span
                  class="badge badge-pill badge-warning"
                  v-else-if="product.Category.name === 'Accessories'"
                  >{{ product.Category.name }}</span
                >
                <span class="badge badge-pill badge-info" v-else>{{
                  product.Category.name
                }}</span> -->
              </div>
              <!-- <div class="row mt-2" v-if="userdata.role === 'customer'">
                <div class="col-9">
                  <button
                    class="btn btn-success btn-block"
                    v-on:click.prevent="seeDetail"
                  >
                    See Detail
                  </button>
                </div>
                <div class="col-3">
                  <button
                    class="btn btn-danger btn-block"
                    v-on:click.prevent="addBookmark(product.id)"
                  >
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div> -->
            </div>
            <div class="card-footer bg-white border-0">
              <button
                class="btn btn-success btn-block"
                v-on:click.prevent="seeDetail(recipe.uri)"
              >
                See Detail
              </button>
              {{ recipe.label }}
              <button
                class="btn btn-danger btn-block"
                v-on:click.prevent="removeRecipe(recipe.id, recipe.label)"
              >
                Remove
              </button>
            </div>
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
  name: "MyRecipes",
  components: {
    Navbar,
    HFooter
  },
  methods: {
    getCal(calories, serving) {
      const kcal = calories / serving;
      return kcal.toFixed(0);
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
      const loading = this.$store
        .dispatch("deleteMyRecipe", { recipeId })
        .then(response => {
          Swal.close();
          swalSuccess("", `${recipe} ${response.data.message}`);
          this.getMyRecipes();
        })
        .catch(err => {
          Swal.close();
          swalError("", err.response.data.message);
        });

      swalLoading(loading);
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
