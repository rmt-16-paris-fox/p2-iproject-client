<template>
  <!-- ! NavBar -->
  <nav class="d-flex justify-content-between align-items-center">
    <div >
      <router-link to="/"><h1>m t t h w .</h1></router-link>
    </div>
    <div class="d-flex">
      <router-link to="/"><h6>home</h6></router-link>
      <router-link to="/keyboards"><h6>keyboards</h6></router-link>
      <router-link to="/about"><h6>about</h6></router-link>
      <router-link to="/order"><h6>order</h6></router-link>
      <router-link to="/profile" v-if="isLoggedIn"><h6>profile</h6></router-link>
      <router-link to="/admin" v-if="isLoggedIn && isAdmin"><h6>admin</h6></router-link>
      <router-link to="/login" v-if="!isLoggedIn"><h6>log in</h6></router-link>
      <a @click.prevent="logout" v-if="isLoggedIn"><h6>log out</h6></a>
    </div>
  </nav>
</template>

<script>
import { alertSuccess } from '@/apis/swal.js'

export default {
  name: 'NavBar',
  methods: {
    logout () {
      this.$store.commit('SET_IS_LOGGED_IN', false)
      this.$store.commit('SET_IS_ADMIN', false)
      localStorage.removeItem('access_token')
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/')
      }
      alertSuccess('See you again!')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    isAdmin () {
      return this.$store.state.isAdmin
    }
  }
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
