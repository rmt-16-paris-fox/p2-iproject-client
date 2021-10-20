/* eslint-disable */
<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 90vh"
  >
    <div class="card w-50" style="background-color: #3c415c">
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
          <div class="d-grid gap-2">
            <button
              class="btn text-light"
              type="button"
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
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      }
        .then(() => {
          this.$store
            .dispatch('login', payload)
            .then(() => {
              this.$router.push('')
            })
            .catch((err) => {
              console.log(err.message)
            })
        })
        .catch((err) => {
          console.log(err)
        })
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
