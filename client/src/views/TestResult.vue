<template>
  <div class="container mt-5">
    <h2>Test Result</h2>
    <hr />
    <div class="container panel-fpascs">
      <p class="mt-4 text-vckalf">
        You got {{ testScore }} right out of {{ totalTest }} question
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      score: 0,
    };
  },
  computed: {
    ...mapState(["totalTest", "testScore"]),
  },
};
</script>

<style>
.panel-fpascs {
  background-color: #eeeeee;
  height: 300px;
  padding: 2rem;
}
.text-vckalf {
  font-size: 24px;
  color: black;
}
</style>
