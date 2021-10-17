<template>
  <!-- ! NavBar -->
  <nav class="d-flex justify-content-between align-items-center">
    <div >
      <router-link to="/"><h1>m t t h w .</h1></router-link>
    </div>
    <div class="d-flex">
      <router-link to="/"><h5>home</h5></router-link>
      <router-link to="/about"><h5>about</h5></router-link>
      <router-link to="/keyboards"><h5>keyboards</h5></router-link>
      <router-link to="/contact"><h5>contact</h5></router-link>
      <router-link to="/login"><h5>sign in</h5></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  nav {
    padding: 30px 100px;
  }

  nav .d-flex a {
    display: block;
    position: relative;
    margin-left: 20px;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
  }

  nav .d-flex a:hover {
    border-bottom: 2px solid #fdf9f1;
  }
</style>
