<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark "
    style="background-color: #757575;"
  >
    <div class="container">
      <a class="navbar-brand" href="#" @click.prevent="toHome">Whatever</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <!-- <li class="nav-item active">
            <a class="nav-link" href="#" @click.prevent="toHome">
              Home
            </a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click.prevent="toSearch">
              Search Kanji
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click.prevent="toLearn">
              Learn Kanji
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click.prevent="toTest"
              >Test Kanji</a
            >
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="toMyProgress">
              My progress
            </a>
          </li> -->
          <li class="nav-item" v-if="isLogedIn && !isPremium">
            <a class="nav-link" href="#" @click.prevent="toUpPremium">
              Upgrade Premium
            </a>
          </li>
        </ul>

        <div class="form-inline my-2 my-lg-0" v-if="isLogedIn">
          <p class="text-white my-2 mr-4" v-if="isPremium">premium user</p>
          <a class="nav-link text-white" href="#" @click.prevent="logout"
            >Logout</a
          >
        </div>
        <div class="form-inline my-2 my-lg-0" v-else>
          <a class="nav-link text-white" href="#" @click.prevent="toLogin"
            >Login</a
          >
          <a class="nav-link text-white" href="#" @click.prevent="toRegister"
            >Register</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isLogedIn", "isPremium"]),
  },
  methods: {
    toHome() {
      this.$router.push({ name: "Home" }).catch(() => {});
    },
    toLogin() {
      this.$router.push({ name: "Login" }).catch(() => {});
    },
    toRegister() {
      this.$router.push({ name: "Register" }).catch(() => {});
    },
    toSearch() {
      this.$router.push({ name: "Search" }).catch(() => {});
    },
    toLearn() {
      this.$router.push({ name: "Learn" }).catch(() => {});
    },
    toTest() {
      this.$router.push({ name: "Test" }).catch(() => {});
    },
    toMyProgress() {
      this.$router.push({ name: "MyProgress" }).catch(() => {});
    },
    toUpPremium() {
      this.$router.push({ name: "Premium" }).catch(() => {});
    },
    logout() {
      localStorage.clear();
      this.$store.commit("SET_LOGED_IN", false);
      this.$store.commit("isPremium", false);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
