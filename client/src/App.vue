<template>
  <div id="app">
    <router-view/>
    <HFooter class="footer"></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'App',
  created () {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      this.$store.commit('SET_IS_LOGIN', true)
    } else {
      this.$store.commit('SET_IS_LOGIN', false)
    }
  },
  components: {
    HFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
