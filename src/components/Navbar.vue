<template>
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar fixed-top mb-4 shadow mt-3"
    style="border-radius: 20px;"
  >
    <router-link class="navbar-brand" to="/">
      <h4 class="font-weight-bolder text-gray-900">
        <i class="fas fa-cookie-bite" style="color: #C36A2D"></i>99Recipes
      </h4>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small" id="displayName">
            <i class="fas fa-wallet"></i>
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small" id="displayName">
            <i class="fas fa-university"></i>
            Course
          </span>
        </a>
      </li>
    </ul> -->

    <ul class="navbar-nav ml-auto" v-if="!isLoggedin">
      <li class="nav-item">
        <router-link class="nav-link" to="/login">
          <span
            class="mr-2 d-none d-lg-inline text-gray-900 font-weight-bolder"
            id="displayName"
          >
            Sign In
          </span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/register">
          <span
            class="mr-2 d-none d-lg-inline text-gray-900 font-weight-bolder"
            id="displayName"
          >
            Sign Up
          </span>
        </router-link>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto" v-else>
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <span
            class="mr-2 d-none d-lg-inline text-gray-900 font-weight-bolder"
            id="displayName"
          >
            Home
          </span>
        </router-link>
      </li>
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="dropdownMenuButton"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span
            class="mr-2 d-none d-lg-inline text-gray-900 font-weight-bolder"
            id="displayName"
          >
            Welcome, {{ userdata.name }}
          </span>
          <img
            class="img-profile rounded-circle"
            src="@/assets/profile/default.png"
            v-if="userdata.photo === 'default.png'"
          />
          <img
            class="img-profile rounded-circle"
            :src="userdata.photo"
            v-else
          />
        </a>
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="dropdownMenuButton"
        >
          <router-link class="dropdown-item" to="/myrecipes">
            <i class="fas fa-clipboard-list fa-sm fa-fw mr-2 text-gray-400"></i>
            My Recipes
          </router-link>
          <a class="dropdown-item" href="#" v-on:click.prevent="logout">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Sign Out
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
/* eslint-disable */
import { swalSuccess, swalError } from "@/apis/sweetAlert.js";

export default {
  name: "Navbar",
  data() {
    return {
      isLoggedin: false
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.isLoggedin = false;
      this.$store.dispatch("removeUserData");
      this.$router.push("/login");
      swalSuccess("", "You are logged out");
    }
  },

  computed: {
    userdata() {
      return this.$store.state.userdata;
    }
  },

  created() {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      this.isLoggedin = true;
      this.$store
        .dispatch("getUserData", access_token)
        .then(response => {
          this.$store.dispatch("setUserData", response.data);
        })
        .catch(err => {
          swal("", `${err.response.data.message}`, "error");
        });
    }
  }
};
</script>

<style></style>
