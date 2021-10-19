<template>
  <section id="RegisterPage" class="d-flex align-items-center justify-content-center">
    <div class="card p-5" data-aos="fade-up" data-aos-duration="600">
      <form @submit.prevent="register">
        <h1 class="mb-4">Register</h1>
        <label>Full Name</label>
        <input type="text" class="form-control mt-1 mb-3" v-model="fullName">
        <label>E-mail</label>
        <input type="email" class="form-control mt-1 mb-3" v-model="email">
        <label>Password</label>
        <input type="password" class="form-control mt-1 mb-5" v-model="password">

        <input type="submit" class="form-control mt-3 py-2 btn-secondary" value="Register">
        <small class="d-block text-muted text-center my-2">or</small>
        <!-- google button -->
        <input type="submit" name="email" class="form-control py-2 btn-secondary" value="Log In">

        <small class="d-block text-muted text-center mt-4">Have an account? <router-link to="/login" class="text-primary">Log in</router-link></small>
      </form>
    </div>
  </section>
</template>

<script>
import { alertSuccess, alertError } from '@/apis/swal.js'

export default {
  name: 'RegisterPage',
  data: function () {
    return {
      email: '',
      password: '',
      fullName: ''
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password,
        fullName: this.fullName
      }

      this.$store.dispatch('register', payload)
        .then((data) => {
          alertSuccess(`New user with E-mail: ${data.email} created. Please continue to Log in.`)
          this.$router.push('/login')
        }).catch((err) => {
          const message = err.message.join(', ')
          alertError(message)
        })
    }
  }
}
</script>

<style>
 #RegisterPage .card {
   min-width: 500px;
 }

  #RegisterPage input[type="submit"] {
    background-color: #26466a;
  }

  #RegisterPage input[type="submit"]:hover {
    background-color: #1b3655;
  }
</style>
