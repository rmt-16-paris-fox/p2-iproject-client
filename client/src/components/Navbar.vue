<template>
  <nav class="navbar navbar-expand-lg bg-secondary text-yellow ">
    <div class="container-fluid">
      <a class="navbar-brand"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link 
            v-if="isLogin" class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <router-link v-if="isLogin" class="nav-link" to="/formAdd" href="#"
              >FORM  ADD</router-link
            >
          </li>
          <li class="nav-item">
            <router-link v-if="!isLogin" class="nav-link" to="/login" href="#"
              >Login</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              v-if="!isLogin"
              class="nav-link"
              to="/register"
              href="#"
              >Register</router-link
            >
          </li>
          <li class=" nav-link" @click.prevent="logout" v-if="isLogin">
            LogOut
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear("access_token");
      this.$store.commit("SET_ISLOGIN", false);
      if (this.$router.currentRouter.name !== "/") {
        this.$router.push("/HomePage");
      }
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  created() {
    if (localStorage.getItem("access_token")) {
      console.log("tesss");
      this.$store.commit("SET_ISLOGIN", true);
    } else {
      this.$store.commit("SET_ISLOGIN", false);
    }
  }
};
</script>

<style></style>
