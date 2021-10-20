<template>
  <div class="text-left" style=" min-height: 100vh">
    <navbar class="mx-3"></navbar>
    <div v-if="!isSearched">
      <div class="row justify-content-center">
        <div
          class="col-8 text-center"
          style="position:absolute; padding-top:39vh; z-index:99"
        >
          <form class="user" v-on:submit.prevent="submitFilter">
            <div class="form-group">
              <label
                for="menu"
                style="font-size:2em; text-shadow: 3px 3px 10px #212121"
                class="font-weight-bolder text-light shadow"
                >Search Recipe Menu</label
              >
              <input
                type="text"
                id="menu"
                class="form-control form-control-user"
                placeholder="Type the recipe menu here"
                autocomplete="off"
                style="color: #000000"
                v-model="name"
              />
            </div>
            <button
              type="submit"
              class="btn"
              style="background-color: #C36A2D; color: white"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div
        id="carouselFade"
        class="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/carousel/1.jpg"
              class="d-block w-100"
              alt="..."
              style="height:100vh;background-size: cover;"
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/carousel/2.jpg"
              class="d-block w-100"
              alt="..."
              style="height:100vh;background-size: cover;"
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/carousel/3.jpg"
              class="d-block w-100"
              alt="..."
              style="height:100vh;background-size: cover;"
            />
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselFade"
          role="button"
          data-slide="prev"
          style="z-index:100"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselFade"
          role="button"
          data-slide="next"
          style="z-index:100"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="row mx-1" style="padding-top:100px" v-else>
      <!-- Start Filter -->
      <div class="col-3 text-left fixed-top" style="padding-top:100px">
        <div class="card shadow">
          <form v-on:submit.prevent="submitFilter">
            <div class="card-body overflow-auto" style="height:50vh">
              <div class="form-group">
                <h6><strong>Name</strong></h6>
                <input
                  class="form-control form-control-sm mt-0"
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="off"
                  placeholder="recipe name"
                  v-model="name"
                />
              </div>
              <hr />
              <h6><strong>Calories (in Kcal)</strong></h6>
              <div class="input-group input-group-sm mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">Min</div>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="minimum calories"
                  v-model="minCal"
                />
              </div>
              <div class="input-group input-group-sm mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">Max</div>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="maximum calories"
                  v-model="maxCal"
                />
              </div>
              <hr />
              <h6><strong>Diet Type</strong></h6>
              <div class="row">
                <div class="col">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      value="balanced"
                      v-model="checkedDietTypes"
                      id="1"
                    />
                    <label class="custom-control-label" for="1">Balanced</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      value="high-protein"
                      v-model="checkedDietTypes"
                      id="2"
                    />
                    <label class="custom-control-label" for="2"
                      >High Protein</label
                    >
                  </div>
                </div>
                <div class="col">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      value="low-carb"
                      v-model="checkedDietTypes"
                      id="3"
                    />
                    <label class="custom-control-label" for="3"
                      >Low Carbo</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      value="low-fat"
                      v-model="checkedDietTypes"
                      id="4"
                    />
                    <label class="custom-control-label" for="4">Low Fat</label>
                  </div>
                </div>
              </div>
              <hr />
              <h6><strong>Meal Type</strong></h6>
              <div class="row">
                <div class="col">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      value="breakfast"
                      v-model="checkedMealTypes"
                      id="5"
                    />
                    <label class="custom-control-label" for="5"
                      >Breakfast</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      value="lunch"
                      v-model="checkedMealTypes"
                      id="6"
                    />
                    <label class="custom-control-label" for="6">Lunch</label>
                  </div>
                </div>
                <div class="col">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      value="dinner"
                      v-model="checkedMealTypes"
                      id="7"
                    />
                    <label class="custom-control-label" for="7">Dinner</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      value="snack"
                      v-model="checkedMealTypes"
                      id="8"
                    />
                    <label class="custom-control-label" for="8">Snack</label>
                  </div>
                </div>
              </div>
              <hr />
              <h6><strong>Time (in minutes)</strong></h6>
              <input
                class="form-control form-control-sm mt-0"
                type="number"
                autocomplete="off"
                placeholder="cook time"
                v-model="time"
              />
            </div>
            <div class="card-footer bg-white">
              <button class="btn btn-primary btn-block">Filter</button>
              <button
                class="btn btn-success btn-block"
                v-on:click.prevent="sendMail()"
              >
                Send Me
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- End Filter -->
      <div class="col-9 mb-4 offset-3">
        <div class="d-flex flex-row flex-wrap justify-content-center">
          <div
            class="card shadow mr-3 mb-3"
            style="border-radius: 20px; width:18rem"
            v-for="(recipe, idx) in recipes"
            :key="idx"
          >
            <div class="text-center">
              <img
                :src="recipe.recipe.image"
                class="card-img-top"
                alt="unable to load image"
                style="height:200px; width:100%"
              />
            </div>
            <div class="card-body text-left">
              <h5 class="card-title">
                <strong>{{ recipe.recipe.label }}</strong>
              </h5>
              <p class="card-text">
                <!-- {{ product.description }} -->
                {{ recipe.recipe.yield }} Serving <br />
                {{ getCal(recipe.recipe.calories, recipe.recipe.yield) }} Kcal
                <br />
                {{ recipe.recipe.dietLabels }} <br />
                {{ recipe.recipe.mealType }} <br />
                {{ recipe.recipe.totalTime }}
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
                v-on:click.prevent="seeDetail(recipe.recipe.uri)"
              >
                See Detail
              </button>
              <button
                class="btn btn-danger btn-block"
                v-on:click.prevent="addMyRecipe(recipe.recipe.uri)"
              >
                Add My Recipes
              </button>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" v-on:click="loadMoreRecipe()">
            Load More Recipe
          </button>
        </div>
      </div>
    </div>
    <h-footer class="bottombar"></h-footer>
  </div>
</template>

<script>
/* eslint-disable */

import Navbar from "../components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
import Swal from "sweetalert2";
import { swalSuccess, swalError, swalLoading } from "../apis/sweetAlert";

export default {
  name: "Home",
  data() {
    return {
      isSearched: false,
      name: "",
      minCal: "",
      maxCal: "",
      checkedDietTypes: [],
      checkedMealTypes: [],
      time: ""
    };
  },
  components: {
    Navbar,
    HFooter
  },
  methods: {
    getCal(calories, serving) {
      const kcal = calories / serving;
      return kcal.toFixed(0);
    },

    submitFilter() {
      const data = {
        name: this.name,
        minCal: this.minCal,
        maxCal: this.maxCal,
        diet: this.checkedDietTypes,
        mealType: this.checkedMealTypes,
        time: this.time
      };

      const loading = this.$store
        .dispatch("submitFilter", data)
        .then(response => {
          Swal.close();
          this.isSearched = true;
          this.$store.commit("SET_RECIPES", {
            recipes: response.data.hits
          });

          this.$store.commit("SET_LOAD_MORE", {
            loadMore: response.data._links.next.href
          });
        })
        .catch(err => {
          Swal.close();
          swalError("", err.response.data.message);
        });

      swalLoading(loading);
    },

    seeDetail(recipeId) {
      recipeId = recipeId.split("#")[1];
      this.$router.push(`/recipe/${recipeId}`);
    },

    addMyRecipe(recipeId) {
      recipeId = recipeId.split("#")[1];
      const loading = this.$store
        .dispatch("addMyRecipe", { recipeId })
        .then(response => {
          Swal.close();
          swalSuccess(
            "",
            `${response.data.recipe} successfully added to your recipes list`
          );
          console.log(response.data);
        })
        .catch(err => {
          Swal.close();
          swalError("", err.response.data.message);
        });

      swalLoading(loading);
    },

    loadMoreRecipe() {
      const loading = this.$store
        .dispatch("loadMoreRecipe", { loadMore: this.loadMore })
        .then(response => {
          Swal.close();
          this.$store.commit("SET_LOAD_MORE", {
            loadMore: response.data._links.next.href
          });

          for (const recipe of response.data.hits) {
            this.$store.commit("PUSH_NEW_RECIPE", { recipe });
          }
        })
        .catch(err => {
          Swal.close();
          swalError("", err.response.data.message);
        });

      swalLoading(loading);
    },

    sendMail() {
      Swal.fire({
        title: "How many recipes do you want us to send?",
        icon: "question",
        input: "range",
        inputAttributes: {
          min: 1,
          max: 10,
          step: 1
        },
        inputValue: 3
      }).then(response => {
        console.log(response.value);
      });
      // this.$store.dispatch("sendMail");
    }
  },
  computed: {
    userdata() {
      return this.$store.state.userdata;
    },

    recipes() {
      return this.$store.state.recipes;
    },

    loadMore() {
      return this.$store.state.loadMore;
    }
  },
  created() {
    this.name = "chicken";
    this.submitFilter();
  }
};
</script>
