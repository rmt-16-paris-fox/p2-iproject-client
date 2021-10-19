<template>
  <!-- ! NavBar -->
  <nav class="d-flex justify-content-between align-items-center">
    <div >
      <router-link to="/"><h1>m t t h w .</h1></router-link>
    </div>
    <div class="d-flex">
      <router-link to="/"><h6>home</h6></router-link>
      <router-link to="/about"><h6>about</h6></router-link>
      <router-link to="/keyboards"><h6>keyboards</h6></router-link>
      <router-link to="/contact"><h6>contact</h6></router-link>
      <router-link to="/login"><h6>log in</h6></router-link>
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
    padding: 15px 100px;
    background-color: #26466a;
    color: #fdf9f1;
  }

  nav .d-flex a {
    position: relative;
    margin-left: 20px;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
  }

  nav .d-flex h6 {
    font-family: 'Poppins', serif;
    font-weight: 400;
  }

  nav .d-flex a:hover {
    border-bottom: 2px solid #fdf9f1;
  }
</style>
