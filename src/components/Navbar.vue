<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'Home' }"
          >Real Estate Finder</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }"
                >Home</router-link
              >
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" :to="{ name: 'Login' }"
                >Sign In</router-link
              >
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" :to="{ name: 'Register' }"
                >Sign Up</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Bookmark' }"
                >Bookmark</router-link
              >
            </li>

            <li class="nav-item" v-if="isLoggedIn">
              <a class="nav-link" aria-current="page" @click.prevent="logout"
                >Log Out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style></style>
