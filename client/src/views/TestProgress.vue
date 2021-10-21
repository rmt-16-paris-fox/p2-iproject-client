<template>
  <div class="container mt-5">
    <h2 class="text-left">Kanji Test</h2>
    <h5 class="text-left">{{ testName }} [Grade {{ testGrade }}]</h5>

    <div :class="textInfoClass" v-if="solved">
      {{ testAnswer }}
    </div>
    <hr />
    <div class="" style="overflow:hidden">
      <div style="float:left;" class="cs11">Score: {{ testScore }}</div>
      <div v-if="ready" style="float:right;" class="cs12">
        question {{ current }} of {{ totalTest }}
      </div>
    </div>

    <div v-if="!ready">Loading question</div>
    <div v-else style="font-family: 'Noto Sans JP', sans-serif;">
      <div class="mt-3" style="font-size: 40px;" v-if="testType === 1">
        <div>{{ question.on }}</div>
        <div>{{ question.kun }}</div>
      </div>
      <div class="mt-3" style="font-size: 50px;" v-else>
        {{ question }}
      </div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-6" v-for="(c, i) in choices" :key="i">
            <div :class="cardClass" @click="onAnswer(i)">
              <div v-if="testType === 1" style="font-size: 50px;">
                {{ c }}
              </div>
              <div v-else>
                <div>{{ c.on }}</div>
                <div>{{ c.kun }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="overflow:hidden">
      <button
        class="btn btn-primary btn-next-01541"
        v-if="solved"
        @click="onNext"
      >
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      solved: false,
      current: 1,
      btnText: "next",
      answer: null,
    };
  },
  computed: {
    ...mapState([
      "testData",
      "testAnswer",
      "testAnswerValue",
      "totalTest",
      "testScore",
      "testType",
      "testGrade",
    ]),
    cardClass(i) {
      let border = "";
      // if ()
      if (i === this.testAnswerValue) {
        border = " b-green3";
      }
      console.log("card class i:", i);

      return "card p-3 mt-3 choice-ans" + border; //"border: 1px solid #4caf50;";
    },
    textInfoClass() {
      let color;
      if (this.testAnswer === "correct") {
        color = " green-3433";
      } else {
        color = " red-3433";
      }
      return "text-right txt-qjbaq" + color;
    },
    question() {
      return this.testData.question;
    },
    // answer choice
    choices() {
      return this.testData.choices;
    },
    qNumber() {
      return this.testData.number;
    },
    ready() {
      return this.testData.ready;
    },
    testName() {
      if (this.testType === 1) {
        return "Find Kanji Multiple choice";
      } else {
        return "Recognize Kanji";
      }
    },
  },
  methods: {
    getQuestion() {
      // get question from server
    },
    onAnswer(i) {
      if (!this.solved) {
        this.answer = i;
        this.solved = true;
        this.$socket.client.emit("testAnswer", { answer: i });
        if (this.current === this.totalTest - 1) {
          this.btnText = "continue";
        }
      }
    },
    onNext() {
      if (this.current === this.totalTest) {
        this.$router.push({ name: "TestResult" });
        this.btnText = "next";
      } else {
        this.current++;
        this.$store.commit("RESET_TEST_DATA");
        this.solved = false;
        this.$socket.client.emit("testNext", {
          type: this.testType,
          grade: this.testGrade,
        });
      }
    },
  },
  watch: {
    qNumber: function(val) {
      console.log(val);
    },
  },
  created() {},
};
</script>

<style>
.choice-ans {
  font-size: 25px;
  height: 108px;
}
.choice-ans:hover {
  cursor: pointer;
}
.btn-next-01541 {
  margin-top: 2.4rem;
  margin-right: 0.9rem;
  float: right;
}
.cs11 {
  font-weight: 700;
  font-size: 22px;
}

.cs12 {
  font-size: 20px;
  color: #757575;
  margin-right: 10px;
}
.txt-qjbaq {
  font-size: 20px;
  font-weight: 700;
}
.red-3433 {
  color: #dd2c00;
}
.green-3433 {
  color: #4caf50;
}
.b-green3 {
  border: 1px solid #4caf50;
}
</style>
