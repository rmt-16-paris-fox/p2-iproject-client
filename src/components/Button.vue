<template>
  <button
    v-bind:class="buttonClass"
    v-bind:buttonType="buttonType"
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
};
</script>

<style>

</style>
