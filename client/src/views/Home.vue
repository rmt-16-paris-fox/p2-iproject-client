<template>
  <div class="home">
    <div class="jumbotron asdas">
      <h1 class="display-4">Learn Kanji</h1>
      <p class="lead">
        Simply learn kanji, also can search and see kanji details.
      </p>
      <hr class="my-4" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ip sum corrupti
        libero hic commodi,
      </p>
      <!-- <a class="btn btn-primary btn-lg" href="#" role="button">Get started</a> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.home {
  min-height: 100vh;
  width: 100%;
  background-image: url("../assets/home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.asdas {
  background-color: rgba(246, 246, 246, 0.8);
  /* height: 100vh;
  padding: 2rem;
  width: 800px;
  height: 500px;
  margin: 4rem auto; */
}
</style>
