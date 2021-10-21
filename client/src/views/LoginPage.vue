<template>
<section class="vh-100">
  <Navbar />
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
          alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
             <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
          </div>
        <form @submit.prevent="loggedIn">

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" v-model="email" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" v-model="password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <router-link to="/register"
                 class="link-danger">Register</router-link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
    <HFooter></HFooter>
</section>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import { swalError, swalSuccess } from '../apis/swal'
import Navbar from '../components/Navbar.vue'
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  name: 'LoginPage',
  directives: {
    GoogleSignInButton
  },
  data () {
    return {
      email: '',
      password: '',
      clientId: '58233509814-mguaofe34hpjjha0tca685spftjd7q2b.apps.googleusercontent.com'
    }
  },
  methods: {
    OnGoogleAuthSuccess (idToken) {
      this.$store.dispatch('LoginGoogle', idToken)
        .then((data) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          swalSuccess('Success Login')
          this.$store.commit('SET_LOG_IN', true)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
          swalSuccess(err)
        })
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    },
    loggedIn () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('Login', data)
        .then(() => {
          swalSuccess('Success Login.')
          this.$store.commit('SET_LOG_IN', true)
          this.$router.push('/')
        })
        .catch((err) => {
          swalError(err)
        })
    },
    loginFacebook () {
      this.$store.dispatch('LoginFaceBook')
    }
  },
  components: {
    HFooter,
    Navbar
  }
}
</script>

<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
.google-signin-button {
  color: white;
  background-color:#1126F1;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
