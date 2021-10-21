<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
        <a class="navbar-brand mt-2 mt-lg-0" @click="home">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-logo-design-template-f9a02876be90450cce722f35ceb453e0_screen.jpg?ts=1586448881"
            height="50"
            alt=""
            loading="lazy"
          />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" @click="home">Home</a>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <a class="nav-link" @click="about">About</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <div class="mr-2">
          <form class="d-flex input-group w-auto" @submit.prevent="runSearch">
            <input
              type="search"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              v-model="searchquery"
            />
            <button
              class="btn btn-outline-secondary"
              type="submit"
              data-mdb-ripple-color="dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
          </form>
        </div>
        <div class="mr-5 ml-2">
          <a @click="voiceSearch"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-mic-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
              <path
                d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
              /></svg
          ></a>
        </div>
        <div v-if="!isLogin">
          <button class="btn btn-outline-primary" @click="toLogin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              /></svg
            >&nbsp;Sign In
          </button>
        </div>
        <!-- Notifications -->
        <div v-if="isLogin" class="ml-2">
          <a class="btn btn-outline-info" @click="logout">Logout</a>
        </div>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      searchquery: "",
    };
  },
  methods: {
    runSearch: function () {
      this.$store.dispatch("runSearch", {
        search: this.searchquery,
        page: 1,
      });
      this.$router.push({
        name: "Search",
        params: { query: this.searchquery },
      });
    },
    home: function () {
      this.$router.push("/");
    },
    about: function () {
      this.$router.push("/about");
    },
    favourite: function () {
      this.$router.push("/favourite");
    },
    toLogin: function () {
      this.$router.push("/login");
    },
    logout: function () {
      localStorage.clear();
      this.$store.commit("SET_IS_LOGIN", false);
      this.$router.push("/login");
    },
    voiceSearch: function () {
      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      window.SpeechGrammarList =
        window.SpeechGrammarList || window.webkitSpeechGrammarList;
      window.SpeechRecognitionEvent =
        window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
      // const texts = document.getElementsByClassName("form-control");
      const recognition = new window.SpeechRecognition();
      recognition.interimResults = true;
      let p = document.createElement("p");
      recognition.start();
      recognition.addEventListener("result", (e) => {
        const text = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        p.innerHTML = text;
        this.searchquery = text;
        if (e.results[0].isFinal) {
          this.runSearch();
        }
        // console.log(e.results[0].isFinal);
        // console.log(text);
        // if (this.voiceSearch) {
        //   recognition.end();
        // }
      });
      //   recognition.addEventListener("end", () => {
      //     recognition.start();
      //   });
    },
  },
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style></style>
