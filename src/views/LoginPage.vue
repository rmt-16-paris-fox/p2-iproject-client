<template>
  <section id="LoginPage" class="d-flex align-items-center justify-content-center">
    <div class="card p-5" data-aos="fade-up" data-aos-duration="600">
      <form @submit.prevent="login">
        <h1 class="mb-4">log in</h1>
        <label>E-mail</label>
        <input type="email" class="form-control mt-1 mb-3" v-model="email">
        <label>Password</label>
        <input type="password" name="password" class="form-control mt-1 mb-5" v-model="password">

        <input type="submit" class="form-control mt-3 py-2 btn-secondary" value="Log In">
        <small class="d-block text-muted text-center my-2">or</small>
        <!-- google button -->
        <GoogleButton></GoogleButton>

        <small class="d-block text-muted text-center mt-4">Don't have an account? Register <router-link to="/register" class="text-primary">here</router-link> </small>
      </form>
    </div>
  </section>
</template>

<script>
import GoogleButton from '@/components/GoogleButton.vue'
import { alertSuccess, alertError } from '@/apis/swal.js'

export default {
  name: 'LoginPage',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('login', payload)
        .then((data) => {
          localStorage.setItem('access_token', data.access_token)
          if (data.role === 'Administrator') {
            this.$store.commit('SET_IS_ADMIN', true)
          } else {
            this.$store.commit('SET_IS_ADMIN', false)
          }
          this.$store.commit('SET_IS_LOGGED_IN', true)
          this.$router.push('/order')
          alertSuccess('Welcome!')
        }).catch((err) => {
          alertError(err.message)
        })
    }
  },
  components: {
    GoogleButton
  }
}
</script>

<style>
  #LoginPage .card {
    min-width: 500px;
  }

  #LoginPage input[type="submit"] {
    background-color: #26466a;
  }

  #LoginPage input[type="submit"]:hover {
    background-color: #1b3655;
  }
</style>
