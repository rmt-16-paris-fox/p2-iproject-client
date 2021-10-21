/* eslint-disable */
<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 90vh"
  >
    <div
      class="card w-50"
      style="background-color: #3c415c; border-radius: 10px"
    >
      <div class="row justify-content-center align-items-center mx-5 my-5">
        <form @submit.prevent="login">
          <h2 class="mb-4" style="color: #b4a5a5">Sign In</h2>
          <div class="input-group mb-3">
            <span class="input-group-text"
              ><i class="fas fa-envelope"></i
            ></span>
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fas fa-lock"></i></span>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <p style="color: #b4a5a5">Or login with google</p>
          <button
            v-google-signin-button="clientId"
            class="google-signin-button"
          >
            Continue with Google
          </button>
          <br />
          <br />
          <div class="d-grid gap-2">
            <button
              class="btn text-light"
              type="submit"
              style="background-color: #151515"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  name: 'Login',
  directives: {
    GoogleSignInButton,
  },
  data() {
    return {
      email: '',
      password: '',
      clientId: `674965215344 -
        mqa5huf2en9sd1uv4lsg7nelq2fvqcfp.apps.googleusercontent.com`,
    }
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      }
      this.$store
        .dispatch('login', payload)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Hi! Welcome to Cashier App',
            showConfirmButton: false,
            timer: 1500,
          })
          this.$router.push('/products')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.data.name,
          })
          console.log(err.data.name)
        })
    },
    OnGoogleAuthSuccess(idToken) {
      // Receive the idToken and make your magic with the backend
      this.$store
        .dispatch('loginGoogle', idToken)
        .then((data) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/products')
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    OnGoogleAuthFail(error) {
      console.log(error)
    },
  },
}
</script>

<style>
.btn-google {
  color: white !important;
  background-color: #ea4335;
}
</style>
