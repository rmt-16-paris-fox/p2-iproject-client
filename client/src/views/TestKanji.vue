<template>
  <div class="container mt-5">
    <h1>test kanji</h1>
    <div class="mt-5">
      <button class="btn btn-secondary " @click="onStartTest(1)">
        Find Kanji Multiple choice
      </button>
      <button class="btn btn-secondary ml-4" @click="onStartTest(2)">
        Recognize Kanji
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Test",
  methods: {
    onStartTest(i) {
      // if (i === 1) {
      //   this.$store.commit("SET_TEST_NAME", "Find Kanji Multiple choice");
      //   this.$store.commit("SET_TEST_TYPE", "Find Kanji Multiple choice");
      // } else {
      //   this.$store.commit("SET_TEST_NAME", "Recognize Kanji");
      // }
      this.$store.commit("SET_TEST_TYPE", i);

      // this.$socket.client.emit("testStart", "test kanji created");
      this.$store.commit("RESET_TEST_DATA");
      this.$router.push({ name: "TestStart" });
    },
  },
  computed: {
    ...mapState(["socketTest"]),
  },
  created() {
    this.$socket.client.emit("test", "test kanji created");
  },
};
</script>

<style></style>
