<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <i class="fas fa-book-open"></i>
    </a>
    <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <router-link to="/"
          class="nav-link active" aria-current="page"
          >
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">Add New Book</a> -->
          <router-link to="/google-books"
          class="nav-link active" aria-current="page"
          >
            Add New Book
          </router-link>
        </li>

        <li class="nav-item"
        v-if="isLoggedIn === false"
        >
          <router-link to="/login"
          class="nav-link active" aria-current="page"
          >
            Login
          </router-link>
        </li>

        <li class="nav-item"
        v-if="isLoggedIn"
        >
          <a class="nav-link active" aria-current="page" href="#"
          v-on:click.prevent="logout"
          >Logout</a>
        </li>
      </ul>
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

      this.$router.push('/');
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

</style>
