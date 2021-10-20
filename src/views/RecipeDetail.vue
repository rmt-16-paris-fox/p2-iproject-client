<template>
  <div class="text-left" style=" min-height: 100vh">
    <navbar class="mx-3"></navbar>
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
  name: "RecipeDetail",
  components: {
    Navbar,
    HFooter
  },
  methods: {
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
