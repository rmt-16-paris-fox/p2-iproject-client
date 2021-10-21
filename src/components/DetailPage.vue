<template>
  <div id="home">
    <Navbar />
    <section id="projects">
      <div class="container">
        <div class="row text-center mb-3">
          <div class="col">
            <h2>Detail Page</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-8 mb-3 h-25">
            <div class="card mb-3" style="max-width: 100%;">
              <img
                :src="gamesDetail.screenshots[0].image"
                class="card-img-top "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{{ gamesDetail.title }}</h5>
                <p class="card-text">
                  {{ gamesDetail.short_description }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-4 mb-3 h-25">
            <div class="card">
              <img src="" class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ gamesDetail.title }}</h5>
                <p class="card-text">
                  {{ gamesDetail.short_description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HFooter />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "DetailPage",
  components: {
    Navbar,
    HFooter
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    gamesDetail() {
      return this.$store.state.gamesDetail;
    }
  },
  created() {
    const id = this.$route.params.id;
    this.$store
      .dispatch("fetchGamesDetail", id)
      .then(({ data }) => {
        this.$store.commit("SET_GAMESDETAIL", data);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }
};
</script>

<style scoped>
section {
  min-height: 90.2vh;
  padding-top: 5rem;
}
</style>
