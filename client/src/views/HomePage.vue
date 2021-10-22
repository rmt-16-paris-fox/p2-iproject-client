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

<h5 class="mt-5">Filter</h5>
<form @submit.prevent="fetchData" class="d-flex mb-5">
  <input v-model="title" class="form-control mx-2" type="text" placeholder="Search class by title" />
  <select @change="changeCategory" v-model="category" class="form-select me-3">
  <option value="" selected disabled>Select class by Category</option>
  <option value="Back End">Back End</option>
  <option value="Front End">Front End</option>
</select>
  <button type="submit" class="btn btn-primary me-2">Search</button>
  <button @click.prevent="clearFilter" type="button" class="btn btn-danger me-2">Cancel</button>
</form>
        <!-- Section-->
  <section>
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <CardClass v-for="DataClass in allClass.rows" :key="DataClass.id" :DataClass="DataClass"/>
        </div>
   <nav style="margin-start: 540px;" aria-label="Page navigation example">
    <ul class="pagination">
    <li class="page-item" v-if="this.currentPage > 1"><a class="page-link" @click.prevent="minusPage">Previous</a></li>
    <li class="page-item"><a class="page-link" @click.prevent>{{ currentPage }}</a></li>
    <li class="page-item" v-if="this.currentPage < this.totalPage"><a class="page-link" @click.prevent="plusPage">Next</a></li>
    </ul>
  </nav>
    </div>
  </section>
      <HFooter class="mt-5"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CardClass from '../components/CardClass.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'HomePage',
  data () {
    return {
      currentPage: 1,
      title: '',
      category: '',
      totalPage: 5
    }
  },
  components: {
    Navbar,
    CardClass,
    HFooter
  },
  methods: {
    clearFilter () {
      this.category = ''
      this.title = ''
      this.fetchData()
    },
    fetchData () {
      const payload = {
        title: this.title,
        category: this.category,
        page: this.currentPage
      }
      this.$store.dispatch('FetchData', payload)
    },
    changeCategory (event) {
      this.category = event.target.value
    },
    plusPage () {
      this.currentPage += 1
      this.fetchData()
    },
    minusPage () {
      this.currentPage -= 1
      this.fetchData()
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
