<template>
  <div>
    <h1 class="card bg-warning justify-content-center text-center">
      LAYOUT BELUM KELAR
    </h1>
    <h1 class="card bg-warning justify-content-center text-center">
      UPDATE DATA VAKSIN
    </h1>
    <h1 class="card bg-warning justify-content-center text-center">
      TOTAL SASARAN: {{ vaccineData.totalsasaran }} <br />
      TOTAL PENERIMA VAKSINASI PERTAMA: {{ vaccineData.vaksinasi1 }} <br />
      TOTAL PENERIMA VAKSINASI KEDUA: {{ vaccineData.vaksinasi2 }} <br />
    </h1>
    <div v-for="article in news" v-bind:key="article.id">
      <h1 class="card bg-warning justify-content-center text-center">
        IMG URL: {{ article.urlToImage }} <br />
        TITLE: {{ article.title }} <br />
        DESCRIPTION: {{ article.description }} <br />
        URL: {{ article.url }} <br />
      </h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "News",
  computed: {
    ...mapState(["vaccineData", "news"]),
  },
  methods: {
    ...mapActions(["fetchNews", "fetchVaccine"]),
  },
  async created() {
    await this.fetchVaccine();
    await this.fetchNews();
  },
};
</script>

<style>
</style>