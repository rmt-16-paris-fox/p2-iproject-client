<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 90vh"
  >
    <div class="card w-50" style="background-color: #3c415c">
      <div class="row justify-content-center align-items-center mx-5 my-5">
        <h2 class="mb-4" style="color: #b4a5a5">Sign Up</h2>
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="fas fa-user"></i></span>
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="fas fa-envelope"></i></span>
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="fas fa-lock"></i></span>
          <input type="password" class="form-control" placeholder="Password" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
}
</script>

<style></style>
