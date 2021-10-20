<template>
  <div class="main">
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure>
              <img
                src="../../public/images/signin-image.jpg"
                alt="sing up image"
              />
            </figure>
          </div>
          <div class="signin-form">
            <h2 class="form-title">Login</h2>
            <form method="POST" class="register-form" id="login-form" @submit.prevent="login">
              <div class="form-group">
                <label for="your_name"
                  ><i class="zmdi zmdi-account material-icons-name"></i
                ></label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  class="form-submit"
                  value="Log in"
                />
              </div>
            </form>
            <div class="social-login">
              <span class="social-label">Or login with</span>
              <ul class="socials">
                <li>
                  <div v-google-signin-button="clientId" class="g-signin2" data-onsuccess="onSignIn"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
      clientId: '983652955158-1ftmfltj2h8fhi7hfdqic5jdk6uj468o.apps.googleusercontent.com'
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
          this.$store.commit('SET_IS_LOGGED_IN', true)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OnGoogleAuthSuccess (idToken) {
      this.$store.dispatch('loginGoogle', idToken)
        .then((data) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('SET_IS_LOGGED_IN', true)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>

<style>
.form-title{
  color: royalblue;
}
</style>
