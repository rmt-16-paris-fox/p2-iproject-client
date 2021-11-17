<template>
  <div>
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
    <!-- <HFooter></HFooter> -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
// import HFooter from 'vue-hacktiv8-footer'
import { alertError } from './apis/swal'

export default {
  name: 'App',
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_IS_LOGGED_IN', true)
      this.$store.dispatch('getCredentials')
        .then((data) => {
          if (data.role === 'Administrator') {
            this.$store.commit('SET_IS_ADMIN', true)
          } else {
            this.$store.commit('SET_IS_ADMIN', false)
          }
        }).catch((err) => {
          alertError(err.message)
        })
    } else {
      localStorage.removeItem('access_token')
      this.$store.commit('SET_IS_LOGGED_IN', false)
      this.$router.push('/')
    }
  },
  components: {
    NavBar,
    Footer
    // HFooter
  }
}
</script>

<style>

</style>
