<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
    <div class="container ">
      <a class="navbar-brand" href="#"></a>
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link me-4 active"
              aria-current="page"
              href="#home"
              >Home</router-link
            >
          </li>
          <li v-if="isLogin" class="nav-item">
            <router-link to="/" class="nav-link me-4" href="#projects"
              >Bookmark</router-link
            >
          </li>
        </ul>
      </div>
      <div class="d-inline justify-content-end">
        <button 
          @click="loginButton"
          v-if="!isLogin"
          class="btn btn-primary rounded me-0"
          type="submit"
        >
          Login
        </button>
        >
        <button
          @click="logoutButton"
          v-if="isLogin"
          class="btn btn-primary rounded me-0"
          type="submit"
        >
          Logout
        </button>
        ><button
          @click="registerButton"
          v-if="!isLogin"
          class="btn btn-primary rounded me-0"
          type="submit"
        >
          Register
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    loginButton() {
      this.$router.push({ name: "LoginPage" }).catch(() => {});
    },
    logoutButton() {
      localStorage.clear();
      this.$store.commit("SET_ISLOGIN", false);
      this.$router.push({ name: "HomePage" }).catch(() => {});
    },
    registerButton() {
      this.$router.push({ name: "RegisterPage" }).catch(() => {});
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  }
};
</script>

<style></style>
