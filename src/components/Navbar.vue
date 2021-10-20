<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div class="container-fluid">
    <router-link
    class="navbar-brand"
    to="/">
      <i class="fas fa-book-open"></i> Bookish
    </router-link>
    <button
    class="navbar-toggler text-white"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/"
          class="nav-link active" aria-current="page"
          >
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/google-books"
          class="nav-link active" aria-current="page"
          >
            Add New Book
          </router-link>
        </li>
      </ul>

        <li class="nav-item btn btn-dark text-white"
        v-if="isLoggedIn === false"
        >
          <router-link to="/login"
          class="nav-link active btn-sm btn-light text-dark login-button" aria-current="page"
          >
            Login
          </router-link>
        </li>
        <li class="nav-item btn"
        v-if="isLoggedIn"
        >
          <a class="nav-link active btn-sm btn-light text-dark logout-button"
          aria-current="page" href="#"
          v-on:click.prevent="logout"
          >Logout</a>
        </li>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('accessToken');

      this.isLoggedIn = false;
      this.$toasted.global.info_message({
        message: 'you are logged out',
      });
    },
  },
  created() {
    if (localStorage.getItem('accessToken')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
};
</script>

<style>
  .logout-button {
    font-family: monospace;
  }

  .login-button {
    font-family: monospace;
  }
</style>
