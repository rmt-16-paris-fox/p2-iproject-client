<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <h3 style="color: White;"><router-link to="/">ChatNonymous</router-link></h3>
      </div>
      <ul class="nav ">
        <li><router-link class="router-link-active" to="/" style="text-decoration: none;">Home</router-link></li>
        <li><router-link to="/chat">Chat!</router-link></li>
        <li><a href="" @click.prevent="logout">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { swalSuccess } from '../apis/swal'
export default {
  name: 'NavBar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('SET_IS_LOGGED_IN', false)
      swalSuccess('Logged Out')
    }
  }
}
</script>

<style scopped>
.navbar{
  position: sticky;
  top : 0;
  z-index: 10000;
  background-color: #2F5D62;
}
ul li a {
  font-size: 18px;
  color: white;
}
</style>
