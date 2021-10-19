<template>
  <section id="HomePage" class="d-flex flex-column align-items-center justify-content-center">
    <!-- <img src="@/assets/bg1.jpg" alt="bg1" width="500px"> -->
    <h1 data-aos="fade-up" data-aos-duration="600">Hi, I'm Matthew</h1>
    <h4 class="mb-5" data-aos="fade-up" data-aos-duration="600">and I build keyboards</h4>
    <router-link to="/order" class="mt-5 px-5 py-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Order Now!</router-link>
  </section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
  #HomePage h1, #HomePage h4{
    font-family: 'Source Code Pro', serif;
    font-weight: 400;
  }

  #HomePage a{
    background-color: #fdf9f1;
    color: black;
    border: 2px solid #26466a !important;
    font-family: 'Source Code Pro', serif;
    font-size: 1.25em;
  }

  #HomePage a:hover{
    background-color: #26466a;
    color: #fdf9f1
  }
</style>
