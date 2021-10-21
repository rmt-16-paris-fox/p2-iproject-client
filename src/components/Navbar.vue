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
      <div class="d-flex justify-content-end">
        <!-- <form class="d-flex">
              <input
                class="form-control me-1"
                type="search"
                placeholder="Title"
                aria-label="Search"
              />
              <input
                class="form-control me-1"
                type="search"
                placeholder="Category"
                aria-label="Search"
              />
              <input
                class="form-control me-1"
                type="search"
                placeholder="Platform"
                aria-label="Search"
              />
              <input
                v-if="isLogin"
                class="form-control me-2"
                type="search"
                placeholder="Title"
                aria-label="Search"
              />
              <i class="bi bi-mic fs-4 me-2"></i>
              <i class="bi bi-mic-fill fs-4 me-4"></i>
              <button
                @click.prevent="submitSearch"
                class="btn btn-primary me-1"
                type="submit"
              >
                Filter
              </button>
              <button
                @clickprevent="submitClear"
                class="btn btn-primary me-5"
                type="submit"
              >
                Reset
              </button>
            </form> -->
        <router-link to="login"
          ><button
            v-if="!isLogin"
            class="btn btn-primary rounded me-1"
            type="submit"
          >
            Login
          </button></router-link
        >
        <button @click="logoutButton"
          v-if="isLogin"
          class="btn btn-primary rounded me-1 d-flex"
          type="submit"
        >
          Logout
        </button>
        <router-link to="register" v-if="!isLogin"
          ><button class="btn btn-primary rounded me-1" type="submit">
            Register
          </button></router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      // pageNumber: '',
      // pageLimit: '',
      title: "",
      content: "",
      category: "",
      select: true
    };
  },
  methods: {
    logoutButton() {
      localStorage.clear();
      this.$store.commit("SET_ISLOGIN", false);
      this.$router.push({ name: "HomePage" }).catch(() => {});
    }
    // submitSearch() {
    //   const payload = {
    //     pageNumber: this.pageNumber,
    //     pageLimit: this.pageLimit,
    //     title: this.title,
    //     content: this.content,
    //     categoryId: this.category
    //   };
    //   this.$store
    //     .dispatch("filteredGames", payload)
    //     .then(({ data }) => {
    //       if (this.$router.path !== "/") {
    //         this.$router.push({ name: "Home" }).catch(() => {});
    //       }
    //       this.$store.commit("SET_NEWSDATA", data);
    //     })
    //     .catch(err => {
    //       console.log(err.response.data);
    //     });
    // },
    // submitClear() {
    //   this.pageNumber = "";
    //   this.pageLimit = "";
    //   this.title = "";
    //   this.content = "";
    //   this.category = "";
    //   this.select = true;
    //   this.submitSearch();
    // }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  }
};
</script>

<style></style>
