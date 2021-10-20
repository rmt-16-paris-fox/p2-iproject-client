<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <h3>ChatNonymous</h3>
      </div>
      <ul class="nav ">
        <li><router-link to="/" style="text-decoration: none; color: blue">Home</router-link></li>
        <li><router-link to="/Profile" style="text-decoration: none; color: blue">Profile</router-link></li>
        <li><router-link to="/Login" style="text-decoration: none; color: blue">Logout</router-link></li>
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
}
</style>
