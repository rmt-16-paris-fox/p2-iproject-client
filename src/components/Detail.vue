<template>
  <div>Detail Page here</div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      estate: {},
    };
  },
  created() {
    this.estate = this.$router.params;
  },
};
</script>

<style></style>
