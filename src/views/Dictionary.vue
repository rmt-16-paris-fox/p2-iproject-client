<template>
  <div>
    <h1 style="color: transparent">SPACE</h1>
    <div
      class="container card-transparent bg-dark mb-3"
      style="
        width: 60rem;
        background-image: url('https://cdn.pixabay.com/photo/2020/03/30/09/15/corona-4983590_960_720.jpg');
        background-blend-mode: luminosity;
      "
    >
      <form
        class="d-flex justify-content-center flex-column"
        v-on:submit.prevent="getVocabulary"
      >
        <br />
        <br />
        <div class="greeting text-light" style="padding-left: 100px">
          <h3 class="text-warning">
            Adakah kosakata yang tidak kamu mengerti?
          </h3>
          <p>Yuk, coba kita cari tahu</p>
        </div>
        <div class="row" style="padding-left: 300px">
          <div class="col form-group text-light">
            <input type="text" class="form-control" v-model="credential.word" />
          </div>
          <div class="col">
            <button type="submit" class="btn btn-danger text-light">
              <b>Submit</b>
            </button>
            <br />
            <br />
          </div>
        </div>
        <br />
      </form>
      <div
        class="text-light"
        v-for="vocabulary in vocabularies"
        v-bind:key="vocabulary.id"
      >
        <div
          class="greeting text-light"
          style="
            padding-left: 50px;
            padding-right: 50px;
            background-color: black;
            opacity: 0.8;
          "
        >
          <h3 class="text-warning">{{ vocabulary.kelas }}</h3>
          <p class="text-warning">{{ vocabulary.deskripsi }}</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Dictionary",
  data() {
    return {
      credential: {
        word: "",
      },
    };
  },
  computed: {
    ...mapState(["vocabularies"]),
  },
  methods: {
    ...mapActions(["dictionary"]),
    async getVocabulary() {
      await this.dictionary(this.credential.word);
    },
  },
};
</script>

<style>
</style>