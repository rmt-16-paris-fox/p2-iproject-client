<template>
  <div>
  <Navbar />
  <h3>Welcome To</h3>
  <h1 class="title-brand">Learn With Damar</h1>
<div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner" style="height: 350px">
    <div class="carousel-item active">
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Choose your favorite class</h5>
        <p>Let's Become a Fullstack Developer with LearnWithDamar</p>
      </div>
    </div>
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Choose your favorite class</h5>
        <p>Let's Become a Fullstack Developer with LearnWithDamar</p>
      </div>
    </div>
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Choose your favorite class</h5>
        <p>Let's Become a Fullstack Developer with LearnWithDamar</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselExampleCaptions"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselExampleCaptions"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h2 class="pt-5">Our Classes</h2>
        <!-- Section-->
        <section>
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <CardClass v-for="DataClass in allClass" :key="DataClass.id" :DataClass="DataClass"/>
              </div>
          </div>
        </section>
      <HFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CardClass from '../components/CardClass.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    CardClass,
    HFooter
  },
  methods: {
    fetchData () {
      this.$store.dispatch('FetchData')
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    allClass () {
      return this.$store.state.dataClass
    }
  }
}
</script>

<style>
.title-brand {
  font-family: 'IM Fell English SC', serif;
}
</style>
