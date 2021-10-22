<template>
  <!-- Navbar -->
<nav class="navbar sticky-top navbar-expand-lg bg-info navbar-light">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <span class="navbar-brand mt-2 mt-lg-0">
        Learn With Damar
      </span>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" v-if="isLogin">
          <router-link class="nav-link" to="/myclass">My Class</router-link>
        </li>
      </ul>
      <!-- Left links -->
    </div>

    <div class="d-flex align-items-center">
      <router-link v-if="!isLogin" to="/login"
        type="button"
        class="btn btn-outline-primary btn-rounded me-2"
        data-mdb-ripple-color="dark"
      >
        Login
      </router-link>
      <router-link to="/register" v-if="!isLogin" type="button" class="btn btn-primary btn-rounded me-2">Register</router-link>
      <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img v-if="isLogin"
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-circle"
          height="25"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
        </li>
      </ul>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_LOG_IN', false)
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
.navbar-brand {
  font-family: 'IM Fell English SC', serif;
}
</style>
