<template>
  <div class="row wrap justify-content-center mt-4">
    <div class="d-flex sm text-center">
      <textarea class="text-field" v-model="text"></textarea>
    </div>
    <div class="d-flex sm md4 text-center">
      <Search :text.sync="text" @speechend="speechEnd"> </Search>
    </div>
    <div class="d-flex text-center mt-4">
      {{ sentences }}
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
export default {
  name: "SearchByVoice",
  data() {
    return {
      text: "",
      sentences: null
    };
  },
  components: {
    Search
  },
  methods: {
    speechEnd({ sentences, text }) {
      console.log("text", text);
      console.log("sentences", sentences);
      this.sentences = sentences;
    }
  }
};
</script>

<style></style>
