<template>
  <div id="home">
    <Navbar />
    <section id="projects">
      <div class="container">
        <!-- search form -->
        <form v-if="!voice" @submit.prevent="submitSearch" class="d-flex form">
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
          <i
            @click.prevent="showVoice"
            class="bi bi-mic-mute fs-4 me-2 border-dark"
          ></i>
          <button class="btn btn-primary me-1">
            Filter
          </button>
          <button @click="submitClear" class="btn btn-primary me-5">
            Reset
          </button>
        </form>
        <!-- end of search form -->

        <!-- Search by Voice -->
        <div v-if="voice" class="d-flex voice">
          <input
            v-model="text"
            class="form-control me-1"
            type="search"
            placeholder="Search by Voice ..."
            aria-label="Search"
          />
          <i
            @click.prevent="showFilter"
            class="bi bi-mic fs-4 me-4 border-dark"
          ></i>
          <button @click="submitClear" class="btn btn-primary me-5">
            Reset
          </button>
          <div class="d-flex sm md4 text-center">
            <Search :text.sync="text" @speechend="speechEnd"> </Search>
          </div>
          <!-- <div class="d-flex text-center mt-4">
            {{ sentences }}
          </div> -->
        </div>
        <!-- End of Search by Voice -->

        <!-- Pagination -->
        <b-pagination
          class="pagination"
          v-model="pageNumber"
          :total-rows="gamesData.count"
          :per-page="pageLimit"
          aria-controls="getGamesData"
          align="center"
        ></b-pagination>
        <!-- End of Pagination -->

        <!-- Games Database + Card -->
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
import Search from "../components/Search.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "HomePage",
  data() {
    return {
      pageNumber: 1,
      pageLimit: 9,
      title: "",
      genre: "",
      platform: "",
      text: "",
      sentences: null,
      voice: false
    };
  },
  components: {
    Navbar,
    HFooter,
    GamesCard,
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
      // console.log("text", text);
      // console.log("sentences", sentences);
      this.sentences = sentences;
      this.title = this.sentences;
      this.submitSearch();
    },
    submitSearch() {
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
          this.$store.commit("SET_GAMESDATA", data);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
    submitClear() {
      this.pageNumber = 1;
      this.pageLimit = 9;
      this.title = "";
      this.genre = "";
      this.platform = "";
      // this.submitSearch();
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
      return this.$store.state.gamesData;
    },
    rows() {
      return this.$store.state.gamesData.rows;
    }
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
