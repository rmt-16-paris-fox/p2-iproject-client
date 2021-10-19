<template>
  <button
    v-bind:class="buttonClass"
    v-bind:buttonType="buttonType"
    v-on:click="handleClick"
  >
    {{ buttonLabel }}
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
    },
    buttonLabel: {
      type: String,
    },
    buttonType: {
      type: String,
    },
  },
  methods: {
    handleClick() {
      this.$emit('handle-click');
    },
  },
};
</script>

<style>

</style>
