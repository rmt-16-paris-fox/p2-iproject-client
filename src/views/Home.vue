<template>
  <div class="container">
    <navbar class="mx-3"></navbar>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>
