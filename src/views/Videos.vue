<template>
  <div
    class="container bg-dark justify-content-center"
    style="
      background-image: url('https://cdn.pixabay.com/photo/2020/03/30/09/15/corona-4983590_960_720.jpg');
      background-blend-mode: luminosity;
    "
  >
    <h1 style="color: transparent">SPACE</h1>
    <h1 class="card bg-dark mb-3 text-warning" style="text-align: center">
      HOTTEST HEALTH VIDEOS
    </h1>
    <div
      class="card bg-dark row justify-content-center"
      v-for="video in videos"
      v-bind:key="video.id"
      style="
        background-image: url('https://cdn.pixabay.com/photo/2020/03/30/09/15/corona-4983590_960_720.jpg');
        background-blend-mode: luminosity;
      "
    >
      <br />
      <iframe
        width="1120"
        height="630"
        v-bind:src="video.yotubeUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="padding: 5%; padding-bottom: 1%; padding-top: 0%"
      ></iframe>
      <h3 class="text-light" style="padding-left: 5%">
        {{ video.title }}
      </h3>
      <br />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Videos",
  computed: {
    ...mapState(["videos"]),
  },
  methods: {
    ...mapActions(["fetchVideo"]),
  },
  async created() {
    await this.fetchVideo();
  },
};
</script>

<style>
</style>