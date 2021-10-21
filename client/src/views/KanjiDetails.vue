<template>
  <div class="container text-left mt-5">
    <div class="row mb-4">
      <div class="col-2 text-center mt-4">
        <h1 class="kanji12931">{{ kanji.character }}</h1>
        {{ kanji.meaning.english }}
      </div>
      <div class="col-6">
        <div class="mt-5">
          <strong>On yomi:</strong>
          <!-- <div>romaji: {{ kanji.onyomi.romaji }}</div> -->
          <span class="ml-3">{{ kanji.onyomi.katakana }}</span>
        </div>
        <div class="mt-2">
          <strong>Kun yomi:</strong>
          <!-- <div>romaji: {{ kanji.onyomi.romaji }}</div> -->
          <span class="ml-3"> {{ kanji.kunyomi.hiragana }}</span>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <h2>Words</h2>
      <div class="card mt-4 p-2 text-left" v-for="(e, i) in examples" :key="i">
        {{ e.japanese }}
        {{ e.meaning.english }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["kanjiDetails"]),
    kanji() {
      return this.kanjiDetails.data.kanji;
    },
    examples() {
      return this.kanjiDetails.data.examples;
    },
  },
  methods: {
    ...mapActions(["getKanjiDetails"]),
    async fetchDetails() {
      this.getKanjiDetails();
      console.log("kanji details:", this.kanjiDetails.data);
    },
  },
  created() {
    this.fetchDetails();
  },
};
</script>

<style>
.kanji12931 {
  font-size: 80px;
}
</style>
