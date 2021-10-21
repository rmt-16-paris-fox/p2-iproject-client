<template>
  <div class="container mt-5 text-left">
    <div class="mb-4" style="overflow:hidden;">
      <h3 class="">search kanji</h3>
      <form method="POST">
        <input
          type="text"
          placeholder="Kanji"
          id="search-kanji"
          v-model="searchValue"
        />
        <button
          class="btn btn-primary float-right mt-3"
          @click.prevent="onSearch"
        >
          Search
        </button>
      </form>
    </div>
    <div class="mt-4" v-if="showInfo">
      <span>search result - {{ searchResults.length }} found</span>

      <div
        class="card p-4 mt-3 hover-pointer"
        v-for="(kanji, i) in searchResults"
        :key="i"
        @click="kanjiDetails(kanji.kanji.character)"
      >
        <div style="font-size: 30px">{{ kanji.kanji.character }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      searchValue: "",
      showInfo: false,
    };
  },
  computed: {
    ...mapState(["searchResults"]),
  },
  methods: {
    ...mapActions(["search"]),
    ...mapMutations({ setKanjiDetails: "SET_KANJI_DETAILS" }),
    async kanjiDetails(kanji) {
      await this.setKanjiDetails({ character: kanji });
      this.$router.push({ name: "KanjiDetails" });
    },
    async onSearch() {
      this.showInfo = false;
      this.$store.commit("SET_SEARCH_RESULT", []);
      await this.search(this.searchValue);
      this.showInfo = true;
    },
  },
};
</script>

<style>
#search-kanji {
  width: 100%;
  margin-top: 30px;
  padding: 6px;
}
.hover-pointer:hover {
  cursor: pointer;
}
</style>
