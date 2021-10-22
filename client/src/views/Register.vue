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
        <form @submit.prevent="register">
          <h2 class="mb-4 text-light">Sign Up</h2>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fas fa-user"></i></span>
            <input
              v-model="username"
              type="text"
              class="form-control"
              placeholder="Username"
            />
          </div>
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
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register: function () {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      this.$store
        .dispatch('register', payload)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          })
          this.$router.push('/login')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
