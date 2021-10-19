<template>
<section
      class="login-section"
    >
        <div id="container" class="container">
          <div class="row login-register-container">
            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <form action=""
              class="login-form form-control form-inline justify-content-center card shadow"
              v-on:submit.prevent="submitLoginForm">
                  <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email address</label>
                    <input type="email"
                    class="form-control rounded-pill text-center"
                    id="loginEmail" aria-describedby="emailHelp" v-model="loginEmail">
                    <div id="emailHelp"
                    class="form-text rounded-pill">Input your registered email address</div>
                  </div>
                  <div class="mb-3">
                    <label for="loginPassword" class="form-label">Password</label>
                    <input type="password"
                    class="form-control rounded-pill text-center"
                    id="loginPassword" v-model="loginPassword">
                  </div>

                  <reusable-button
                    buttonType="submit"
                    buttonLabel="Login"
                    buttonClass="btn btn-dark"
                    v-on:handle-click="login"
                  ></reusable-button><br>

                  <!-- <google-signin-button
                    v-on:googleLoginResponse="googleLoginSuccess"
                  ></google-signin-button> -->
              </form>

              <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <p>Don't have an account yet? Register here:</p>
                <button v-on:click="toRegisterPage" type="button"
                class="btn btn-light btn-sm to-register-section-btn">Create Account</button>
              </div>
            </div>
          </div>
        </div>

      </section>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
    };
  },
  components: {
    'reusable-button': Button,
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.loginEmail,
        password: this.loginPassword,
      })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('accessToken', response.data.access_token);

          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    toRegisterPage() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped>
  .login-register-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
