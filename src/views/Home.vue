<template>
  <div class="text-left" style=" min-height: 100vh">
    <navbar class="mx-3"></navbar>
    <div v-if="!isSearched">
      <div class="row justify-content-center">
        <div
          class="col-8 text-center"
          style="position:absolute; padding-top:39vh; z-index:99"
        >
          <form v-on:submit.prevent="submitName">
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
                class="form-control"
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
        data-interval="2000"
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
          <div class="card-body">
            <form v-on:submit.prevent="submitFilter">
              <div class="form-group">
                <h6><strong>NAME</strong></h6>
                <input
                  class="form-control form-control-sm mt-0"
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="off"
                  placeholder="product name"
                  v-model="name"
                />
              </div>
              <hr />
              <h6><strong>PRICE</strong></h6>
              <div class="input-group input-group-sm mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">Rp</div>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="minimum price"
                  v-model="minPrice"
                />
              </div>
              <div class="input-group input-group-sm mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">Rp</div>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="maximum price"
                  v-model="maxPrice"
                />
              </div>
              <hr />
              <button class="btn btn-primary btn-block">Filter</button>
            </form>
          </div>
        </div>
      </div>
      <!-- End Filter -->
      <div class="col-9 mb-4 offset-3">
        <div class="d-flex flex-row flex-wrap justify-content-center">
          <div
            class="card shadow mr-3 mb-3"
            style="border-radius:20px; width:18rem"
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
                Recipe Desc
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
                v-on:click.prevent="seeDetail"
              >
                See Detail {{ idx + 1 }}
              </button>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button
            class="btn btn-outline-primary"
            v-on:click.prevent="loadMoreRecipe()"
          >
            Load more recipe
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
import { swalSuccess, swalError } from "../apis/sweetAlert";
import Swal from "sweetalert2";

export default {
  name: "Home",
  data() {
    return {
      name: "",
      isSearched: false,
      minPrice: "",
      maxPrice: "",
      size: ""
    };
  },
  components: {
    Navbar,
    HFooter
  },
  methods: {
    submitName() {
      Swal.fire({
        title:
          '<i class="fas fa-cookie-bite fa-5x fa-spin" style="color: #C36A2D">',
        html: "Loading, please wait ...",
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          this.$store
            .dispatch("submitName", { name: this.name })
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
        }
      });
    },

    loadMoreRecipe() {
      Swal.fire({
        title:
          '<i class="fas fa-cookie-bite fa-5x fa-spin" style="color: #C36A2D">',
        html: "Loading, please wait ...",
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          this.$store
            .dispatch("loadMoreRecipe", { loadMore: this.loadMore })
            .then(response => {
              Swal.close();
              // console.log(response.data);
              this.$store.commit("SET_LOAD_MORE", {
                loadMore: response.data._links.next.href
              });

              for (const recipe of response.data.hits) {
                console.log(recipe);
                this.$store.commit("PUSH_NEW_RECIPE", { recipe });
              }
            })
            .catch(err => {
              Swal.close();
              swalError("", err.response.data.message);
            });
        }
      });
    }
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },

    loadMore() {
      return this.$store.state.loadMore;
    }
  },
  created() {
    this.name = "chicken";
    this.submitName();
  }
};
</script>
