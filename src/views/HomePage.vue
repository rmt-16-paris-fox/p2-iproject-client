<template>
  <div id="home">
    <Navbar />
    <section id="projects">
      <div class="container">
        <form v-if="!voice" class="d-flex form">
          <input
            v-model="title"
            class="form-control me-1"
            type="search"
            placeholder="Title"
            aria-label="Search"
          />
          <input
            v-model="genre"
            class="form-control me-1"
            type="search"
            placeholder="Genre"
            aria-label="Search"
          />
          <input
            v-model="platform"
            class="form-control me-1"
            type="search"
            placeholder="Platform"
            aria-label="Search"
          />
          <i @click.prevent="showVoice" class="bi bi-mic fs-4 me-2"></i>
          <button
            @click.prevent="submitSearch"
            class="btn btn-primary me-1"
            type="submit"
          >
            Filter
          </button>
          <button
            @click="submitClear"
            class="btn btn-primary me-5"
            type="submit"
          >
            Reset
          </button>
        </form>
        <div v-if="voice" class="d-flex mb-2 mt-2 voice">
          <input
            v-model="text"
            class="form-control me-1"
            type="search"
            placeholder="Search by Voice ..."
            aria-label="Search"
          />
          <i @click.prevent="showFilter" class="bi bi-mic-fill fs-4 me-4"></i>
          <div class="d-flex sm md4 text-center">
            <Search :text.sync="text" @speechend="speechEnd"> </Search>
          </div>
          <div class="d-flex text-center mt-4">
            {{ sentences }}
          </div>
        </div>
        <b-pagination
          class="pagination"
          v-model="pageNumber"
          :total-rows="gamesData.count"
          :per-page="pageLimit"
          aria-controls="getGamesData"
          align="center"
        ></b-pagination>
        <div class="row text-center mb-3">
          <div class="col">
            <h2>Free-to-Play Games Database App</h2>
          </div>
        </div>
        <div class="row">
          <GamesCard
            id="getGamesData"
            v-for="games in rows"
            :key="games.id"
            :games="games"
          />
        </div>
      </div>
    </section>
    <HFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import GamesCard from "@/components/GamesCard.vue";
// import SearchByVoice from "../views/SearchByVoice.vue";
import Search from "../components/Search.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "HomePage",
  data() {
    return {
      pageNumber: 2,
      pageLimit: 10,
      title: "",
      genre: "",
      platform: "",
      text: "",
      sentences: null,
      voice: false,
      pagination: false
    };
  },
  components: {
    Navbar,
    HFooter,
    GamesCard,
    // SearchByVoice
    Search
  },
  methods: {
    showVoice() {
      this.voice = true;
    },
    showFilter() {
      this.voice = false;
    },
    speechEnd({ sentences, text }) {
      console.log("text", text);
      console.log("sentences", sentences);
      this.sentences = sentences;
    },
    submitSearch() {
      this.pagination = true;
      const payload = {
        pageNumber: this.pageNumber,
        pageLimit: this.pageLimit,
        title: this.title,
        genre: this.genre,
        platform: this.platform
      };
      this.$store
        .dispatch("fetchGames", payload)
        .then(({ data }) => {
          if (this.$router.path !== "/") {
            this.$router.push({ name: "Home" }).catch(() => {});
          }
          this.$store.commit("SET_PAGINATION", data);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
    submitClear() {
      this.pageNumber = "";
      this.pageLimit = "";
      this.title = "";
      this.content = "";
      this.category = "";
      this.submitSearch();
    }
  },
  created() {
    const payload = {
      pageNumber: this.pageNumber,
      pageLimit: this.pageLimit,
      title: this.title,
      genre: this.genre,
      platform: this.platform
    };
    this.$store
      .dispatch("fetchGames", payload)
      .then(({ data }) => {
        console.log(data);
        this.$store.commit("SET_GAMESDATA", data);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    gamesData() {
      console.log(this.$store.state.gamesData);
      return this.$store.state.gamesData;
    },
    rows() {
      return this.$store.state.gamesData.rows;
    }
    // paginationData() {
    //   return this.$store.state.gamesData;
    // }
  },
  watch: {
    pageNumber(val) {
      const payload = {
        pageNumber: val,
        pageLimit: this.pageLimit,
        title: this.title,
        genre: this.genre,
        platform: this.platform
      };
      this.$store
        .dispatch("fetchGames", payload)
        .then(({ data }) => {
          // console.log(data);
          this.$store.commit("SET_GAMESDATA", data);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  }
};
</script>
<style scoped>
section {
  min-height: 90.2vh;
  padding-top: 3rem;
}
.form {
  padding-top: 2rem;
}
.voice {
  padding-top: 2rem;
}
.pagination {
  padding-top: 2rem;
}
</style>
