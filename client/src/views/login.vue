<template>
        <!--Login Section -->
        <section id="Login">
            <div class="container-LoRe">
                <div class="card d-flex" style="width: 18rem;">
                    <h1 class="text-center mt-3">Login Page</h1>
                    <form id="FormLogin">
                        <div class="card-body">
                            <label>Email</label>
                            <input type="email" class="form-control mb-2" v-model="emailLogin">
                            <label>Password</label>
                            <input type="password"  class="form-control  mb-2" v-model="passwordLogin">
                            <div class="d-grid gap-2">
                            <buttonClick label="Login" btnColor="btn btn-primary my-2 btn-block" btnType="button" @handleClick="handleLogin" ></buttonClick>
                            </div>
                            <div class="text-in-card mx-2">
                                <p>Don't have an account yet? <a href="" @click.prevent="toRegisPage" id="toRegisPage">Sign Up</a> Or Sign in with google</p>
                            </div>
                            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <!--Login Section -->
</template>

<script>
import GoogleLogin from 'vue-google-login'
import buttonClick from '../components/buttonClick.vue'
export default {
  name: 'login',
  components: {
    buttonClick,
    GoogleLogin
  },
  data: function () {
    return {
      emailLogin: '',
      passwordLogin: '',
      params: {
        client_id: '1056707836367-rloa75prhcjuq2ga5cm6vumn7td4opop.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('handleLogin', {
        email: this.emailLogin,
        password: this.passwordLogin
      })
        .then((resp) => {
          this.$toast.open({
            message: 'Login Success',
            type: 'success',
            position: 'top-right'
          })
          localStorage.setItem('access_token', resp.data.access_token)
          this.$router.push({ name: 'homePage' })
        })
        .catch(err => {
          this.$toast.open({
            message: err.response.data.msg,
            type: 'error',
            position: 'top-right'
          })
        })
    },
    toRegisPage () {
      this.$router.push('register')
    },
    onSuccess (googleUser) {
      const idToken = googleUser.Zb.id_token
      this.$store.dispatch('handleGoogleLogin', idToken)
        .then((resp) => {
          this.$toast.open({
            message: 'Login Success',
            type: 'success',
            position: 'top-right'
          })
          localStorage.setItem('access_token', resp.data.access_token)
          this.$router.push({ name: 'homePage' })
        })
        .catch(() => {
          this.$toast.open({
            message: 'Error Failed To Sign In',
            type: 'error',
            position: 'top-right'
          })
        })
    }
  }
}
</script>

<style>
.container-LoRe{
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
}
</style>
