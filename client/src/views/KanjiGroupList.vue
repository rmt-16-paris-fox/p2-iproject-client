<template>
  <div class="container mt-5">
    <h1>Kanji Grade Level {{ groupList.gradeLevel }}</h1>
    <hr />
    <div class="container mt-5">
      <div class="row">
        <div
          class="col-2 mt-3"
          v-for="(kanji, i) in this.groupList.kanjiList"
          :key="i"
        >
          <div
            class="card lnk213"
            style="font-size:35px"
            @click="kanjiDetails(kanji.kanji.character)"
          >
            {{ kanji.kanji.character }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["groupList"]),
  },
  methods: {
    ...mapActions(["getKanjiByGrade"]),
    ...mapMutations({ setKanjiDetails: "SET_KANJI_DETAILS" }),
    async fetchKanji() {
      await this.getKanjiByGrade(this.groupList.gradeLevel);
      console.log("kanjis:", this.groupList.kanjiList);
    },
    async kanjiDetails(kanji) {
      await this.setKanjiDetails({ character: kanji });
      this.$router.push({ name: "KanjiDetails" });
    },
  },
  created() {
    this.fetchKanji();
  },
};
</script>

<style>
.lnk213:hover {
  cursor: pointer;
}
</style>
