<template>
  <div class="container mt-5">
    <!-- search kanji to learn -->
    <div>
      <h1>Study Kanji</h1>

      <div class="row">
        <div class="col-6">
          <div class=" card panel-aaldk" @click="sadge">
            <h3>Study kanji</h3>
            <p>
              Study kanji picked from your current grade level. Kanji picked
              randomly
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class=" card panel-aaldk" @click="sadge">
            <h3>Review learned kanji</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <p class="t3201">Kanji list By Grade Level</p>
      <div class="row">
        <div class="col-6" v-for="n in 6" :key="n">
          <button class="btn-0101" @click="gradeLevelList(n)">
            Grade Level {{ n }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapMutations } from "vuex";
export default {
  name: "Learn",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    ...mapMutations({ setGroupList: "SET_GROUP_LIST" }),
    gradeLevelList(grade) {
      this.setGroupList({ gradeLevel: grade, kanjiList: [] });
      this.$router.push({ name: "GroupList" });
    },
    learnNewKanji() {},
    sadge() {
      Swal.fire("features not available sadge");
    },
  },
};
</script>

<style>
.panel-aaldk {
  height: 300px;
  margin-top: 2.5rem;
  padding: 15px;
  background-color: #eceff1;
  transition: transform 0.1s;
}

.panel-aaldk:hover {
  cursor: pointer;
  /* box-shadow: 2px 2px; */
  transform: scale(1.005);
}
.t3201 {
}
.btn-0101 {
  padding: 20px;
  width: 100%;
  margin: 16px;
  border-radius: 10px;
  transition: transform 0.1s;
}
.btn-0101:hover {
  cursor: pointer;
  /* box-shadow: 2px 2px; */
  transform: scale(1.05);
}
</style>
