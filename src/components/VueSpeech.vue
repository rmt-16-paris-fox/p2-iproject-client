<template>
  <span>
    <!-- <p
    v-for="(word, index) in transcription"
    v-bind:key="index"
    >{{ word }}</p>
    <p>{{ runtimeTranscription }}</p> -->

    <!-- <reusable-button
      buttonClass="btn btn-dark text-white sm"
      buttonLabel="Hear"
      buttonType="button"
      v-on:handle-click="startRecognition"
    ></reusable-button>
    <br>

    <reusable-button
      buttonClass="btn btn-dark text-white sm"
      buttonLabel="Stop"
      buttonType="button"
      v-on:handle-click="stopRecognition"
    ></reusable-button> -->

  </span>
</template>

<script>
// import Button from './Button.vue';

export default {
  name: 'vue-speech-recognition',
  props: {
    lang: {
      type: String,
      default: 'en-US',
    },
    isPlay: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    runtimeTranscription: '',
    transcription: [],
    recognition: null,
  }),
  components: {
    // 'reusable-button': Button,
  },
  methods: {
    startRecognition() {
      console.log('Starting');
      this.checkApi();
      this.recognition.start();
    },
    stopRecognition() {
      console.log('Stopping');
      this.recognition.stop();
      this.recognition = null;
    },
    checkApi() {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      // eslint-disable-next-line no-undef
      if (!SpeechRecognition && 'development' !== 'production') {
        throw new Error('Speech Recognition does not exist on this browser. Use Chrome or Firefox');
      }
      // eslint-disable-next-line no-undef
      if (!SpeechRecognition) {
        console.log('No Speech Recognition');
        return;
      }
      console.log('Starting UP');
      // eslint-disable-next-line no-undef
      this.recognition = new SpeechRecognition();

      this.recognition.lang = this.lang;
      this.recognition.interimResults = true;
      this.recognition.addEventListener('result', (event) => {
        console.log('result');
        const text = Array.from(event.results).map((result) => result[0]).map((result) => result.transcript).join('');
        this.runtimeTranscription = text;
      });
      this.recognition.addEventListener('end', () => {
        console.log('End');
        if (this.runtimeTranscription !== '') {
          this.transcription.push(this.runtimeTranscription);
          this.$emit('onTranscriptionEnd', {
            transcription: this.transcription,
            lastSentence: this.runtimeTranscription,
          });
        } else {
          console.log('Nothing Found');
        }
        this.runtimeTranscription = '';
      });
      // eslint-disable-next-line func-names
      this.recognition.onresult = function (event) {
        const color = event.results[0][0].transcript;
        console.log(color);
      };
    },
  },
  mounted() {
    this.checkApi();
  },
  watch: {
    isPlay(value) {
      if (value) {
        this.startRecognition();
      } else {
        this.stopRecognition();
      }
    },
  },
};
</script>
