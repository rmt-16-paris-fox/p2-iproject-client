<template>
  <div class="card">
    <div class="card-text">
      <div class="row wrap justify-content-evenly">
        <div class="d-flex sm text-center">
          <p v-if="error" class="grey text">{{ error }}</p>
          <p v-if="sentences.length > 0">
            <!-- <span v-for="(sentence, i) in sentences" :key="i"
              >{{ sentence }}.
            </span> -->
            <span>{{ runtimeTranscription }}</span>
          </p>
        </div>
        <div class="d-flex sm text-center">
          <i
            @click.stop="
              toggle ? endSpeechRecognition() : startSpeechRecognition()
            "
            :color="!toggle ? 'grey' : speaking ? 'red' : 'red darken-3'"
            :class="{ 'bi fs-4 me-2': toggle }"
          >
            <i>{{ toggle ? "stop" : "start" }}</i>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recognition from "../apis/recognition";

export default {
  name: "Search",
  props: {
    lang: {
      type: String,
      default: "en-US"
    },
    text: {
      type: [String, null],
      required: true
    }
  },
  data() {
    return {
      error: false,
      speaking: false,
      toggle: false,
      runtimeTranscription: "",
      sentences: []
    };
  },
  methods: {
    checkCompatibility() {
      if (!recognition) {
        this.error =
          "Speech Recognition is not available on this browser. Please use Chrome or Firefox";
      }
    },
    endSpeechRecognition() {
      recognition.stop();
      this.toggle = false;
      this.$emit("speechend", {
        sentences: this.sentences,
        text: this.sentences.join(". ")
      });
    },
    startSpeechRecognition() {
      if (!recognition) {
        this.error =
          "Speech Recognition is not available on this browser. Please use Chrome or Firefox";
        return false;
      }
      this.toggle = true;
      recognition.lang = this.lang;
      recognition.interimResults = true;

      recognition.addEventListener("speechstart", event => {
        this.speaking = true;
      });

      recognition.addEventListener("speechend", event => {
        this.speaking = false;
      });

      recognition.addEventListener("result", event => {
        const text = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join("");
        this.runtimeTranscription = text;
      });

      recognition.addEventListener("end", () => {
        if (this.runtimeTranscription !== "") {
          this.sentences.push(
            this.capitalizeFirstLetter(this.runtimeTranscription)
          );
          this.$emit(
            "update:text",
            `${this.text}${this.sentences.slice(-1)[0]}. `
          );
        }
        this.runtimeTranscription = "";
        recognition.stop();
        if (this.toggle) {
          // keep it going.
          recognition.start();
        }
      });
      recognition.start();
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  mounted() {
    this.checkCompatibility();
  }
};
</script>

<style></style>
