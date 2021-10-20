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
                  <a href="#"
                    ><i class="display-flex-center zmdi zmdi-google">Google</i
                  ></a>
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
export default {
  name: 'LoginPage',
  data () {
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
          this.$store.commit('SET_IS_LOGGED_IN', true)
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
</style>
