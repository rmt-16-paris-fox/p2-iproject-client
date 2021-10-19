<template>
  <section id="LoginPage" class="d-flex align-items-center justify-content-center">
    <div class="card p-5" data-aos="fade-up" data-aos-duration="600">
      <h1 class="mb-4">Log In</h1>
      <label>E-mail</label>
      <input type="email" name="email" class="form-control mt-1 mb-3">
      <label>Password</label>
      <input type="email" name="password" class="form-control mt-1 mb-3">
      <input type="submit" name="email" class="form-control mt-3 py-2 btn-secondary" value="Log In">

      <small class="text-muted text-center my-2">or</small>
      <!-- google button -->
      <input type="submit" name="email" class="form-control py-2 btn-secondary" value="Log In">

      <small class="text-muted text-center mt-4">Don't have an account? Register <router-link to="/register" class="text-primary">here</router-link> </small>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style>
  #LoginPage .card {
    min-width: 500px;
  }

  #LoginPage input[type="submit"] {
    background-color: #26466a;
  }
</style>
