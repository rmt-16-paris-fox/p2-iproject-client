<template>
  <h1>This is favourite page</h1>
</template>

<script>
export default {
  name: "Favourite",
  computed: {
    code: function () {
      return this.$route.params.code;
    },
    image: function () {
      return this.$route.params.image;
    },
    name: function () {
      return this.$route.params.name;
    },
    desc: function () {
      return this.$route.params.desc;
    },
  },
};
</script>

<style></style>
