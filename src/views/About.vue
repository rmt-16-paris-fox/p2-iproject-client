<template>
  <div
    class="content"
    style="
      margin-left: 55%;
      margin-right: 5%;
      margin-top: 2%;
      color: white;
      opacity: 0.7;
    "
  >
    <div class="greeting" style="opacity: 0.8">
      <h1 class="text-warning">Health Care Forum,</h1>
      <p style="opacity: 0.7">
        merupakan sebuah platform diskusi non-comercial yang dijalankan oleh
        Roby.
      </p>
      <p style="opacity: 0.7">
        20 Oktober 2021, merupakan hari pertama platform ini dipublikasikan.
      </p>
      <p style="opacity: 0.7">
        Tujuan dari platform ini adalah sebagai sarana peduli dan berbagi
        berbagai informasi yang berhubungan dengan permasalahan kesehatan
        masyarakat.
      </p>
      <div class="text-warning" style="opacity: 1">
        <h1>Sampaikan Sesuatu?</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "About",
  methods: {
    ...mapActions(["fetchVaccine", "fetchData", "fetchNews"]),
    async test() {
      await this.fetchVaccine();
      await this.fetchData();
      await this.fetchNews();
    },
  },
};
</script>

<style>
</style>