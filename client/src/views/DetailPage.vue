<template>
  <div class="vh-100">
    <Navbar />
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img
                :src="detailClass.imageUrl"
                alt="login form"
                class="img-fluid" style="border-radius: 1rem 0 0 1rem;"
              />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                  <h1 class="fw-bold mb-3 justify-content-center">Detail</h1>
                  <h3 class="fw-normal mb-1 pb-1" style="letter-spacing: 1px;">Title</h3>
                  <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">{{ detailClass.title }}</h6>
                  <h3 class="fw-normal mb-1 pb-1" style="letter-spacing: 1px;">Instructor</h3>
                  <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">{{ detailClass.instructor }}</h6>
                  <h3 class="fw-normal mb-1 pb-1" style="letter-spacing: 1px;">Description</h3>
                  <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">{{ detailClass.description }}</h6>
                  <h3 class="fw-normal mb-1 pb-1" style="letter-spacing: 1px;">Price</h3>
                  <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">{{ formatPrice }}</h6>
                  <router-link to="/" class="btn btn-primary">Back To Home</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HFooter />
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'DetailPage',
  components: {
    Navbar,
    HFooter
  },
  methods: {
    getDetails () {
      this.$store.dispatch('Detail', this.$route.params.id)
    }
  },
  created () {
    this.getDetails()
  },
  computed: {
    detailClass () {
      return this.$store.state.detailClass
    },
    formatPrice () {
      return Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      }).format(this.detailClass.price)
    }
  }
}
</script>

<style>

</style>
