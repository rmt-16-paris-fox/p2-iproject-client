<template>
  <div>
  <Navbar />
<h2 class="title">My Class</h2>
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
import CardClass from '../components/CardMyClass.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    CardClass,
    HFooter
  },
  methods: {
    fetchDataMyClass () {
      this.$store.dispatch('MyClass')
    }
  },
  created () {
    this.fetchDataMyClass()
  },
  computed: {
    allClass () {
      return this.$store.state.myCLass
    }
  }
}
</script>

<style>
.title {
  font-family: 'IM Fell English SC', serif;
}
</style>
