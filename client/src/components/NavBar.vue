<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <h3 style="color: White;">ChatNonymous</h3>
      </div>
      <ul class="nav ">
        <li><router-link class="router-link-active" to="/" style="text-decoration: none;">Home</router-link></li>
        <li><router-link class="router-link-active" to="/Profile" style="text-decoration: none;">Profile</router-link></li>
        <li><router-link class="router-link-active" to="/Login" style="text-decoration: none;">Logout</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scopped>
.navbar{
  position: sticky;
  top : 0;
  z-index: 10000;
  background-color: #2F5D62;
}
</style>
