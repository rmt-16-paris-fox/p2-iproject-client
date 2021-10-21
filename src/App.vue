<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="./assets/dota-2.png" height="24" style="margin-top: -4px;" class="me-2" />Dota 2 Analyzer</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'DraftAnalyzer' }">Draft</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view style="margin-bottom: 80px; min-height: 100vh;"/>
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
// ! https://steamcdn-a.akamaihd.net/ cdn steam untuk assets

export default {
  name: 'App',
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
  color: #cacaca;
  background-color: #1f1f1f;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #cacaca;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
