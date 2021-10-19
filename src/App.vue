<template>
  <div>
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_IS_LOGGED_IN', true)
    } else {
      this.$store.commit('SET_IS_LOGGED_IN', false)
    }
  },
  components: {
    NavBar, Footer
  }
}
</script>

<style>

</style>
