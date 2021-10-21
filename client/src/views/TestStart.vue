<template>
  <div class="container mt-5">
    <div class="container text-left mb-5">
      <h3>{{ testName }}</h3>
      <hr />
      <div class="row mt-5 panel-asdas">
        <div class="col-6">
          <p>Select Grade Level:</p>
          <select class="custom-select" name="gradeLevel" id="" v-model="grade">
            <option v-for="n in 6" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>
        <div class="col-6">
          <p>total question:</p>
          <select
            class="custom-select"
            name="questionCount"
            v-model="totalQuestion"
          >
            <option value="5" default>5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" style="width:400px;" @click="onStart">
      Start Test
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      grade: null,
      totalQuestion: null,
    };
  },
  computed: {
    ...mapState(["testName", "testType"]),
  },
  methods: {
    ...mapActions(["emitSocketEvent"]),
    onStart() {
      console.log("::", this.grade, this.totalQuestion);
      this.$store.commit("SET_TOTAL_TEST", this.totalQuestion);
      this.$store.commit("SET_TEST_SCORE", 0);
      this.$store.commit("SET_TEST_GRADE", this.grade);

      this.$socket.client.emit("testStart", {
        grade: this.grade,
        totalTest: this.totalQuestion,
        type: this.testType,
      });
      this.$router.push({ name: "TestProgress" });
    },
  },
  created() {
    this.grade = 1;
    this.totalQuestion = 5;
  },
};
</script>

<style>
.panel-asdas p {
  font-size: 24px;
}
</style>
