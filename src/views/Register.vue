<template>
  <div class="body">
    <nav-bar></nav-bar>
    <section
      class="register-section"
    >
        <div id="container" class="container">
          <div class="row login-register-container"
          data-aos="fade-up" data-aos-duration="600"
          >
            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <form action=""
              class="register-form card shadow form-control form-inline justify-content-center"
              v-on:submit.prevent="submitRegisterForm">
                  <div class="mb-3">
                    <label for="registerUsername" class="form-label">Username</label>
                    <input type="text"
                    class="form-control text-center rounded-pill text-center"
                    id="registerUsername" v-model="registerUsername">
                  </div>

                  <div class="mb-3">
                    <label for="registerEmail" class="form-label">Email address</label>
                    <input
                    type="text"
                    class="form-control rounded-pill text-center"
                    id="registerEmail" name="registerEmail" v-model="registerEmail">
                  </div>

                  <div class="mb-3">
                    <label for="registerPassword" class="form-label">Password</label>
                    <input
                    type="password"
                    class="form-control rounded-pill text-center"
                    id="registerPassword" name="registerPassword" v-model="registerPassword">
                  </div>

                  <reusable-button
                    buttonType="submit"
                    label="Register"
                    buttonClass="btn btn-dark"
                    buttonLabel="Register"
                  ></reusable-button><br>
              </form>

              <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <p>Already have an account? Login here:</p>
                <button
                v-on:click="toLoginPage"
                class="btn btn-light btn-sm to-register-section-btn">Login Account</button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <HFooter
      class="footer"
      ></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer';
import Button from '../components/Button.vue';
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
    };
  },
  methods: {
    submitRegisterForm() {
      this.$store.dispatch('register', {
        username: this.registerUsername,
        email: this.registerEmail,
        password: this.registerPassword,
      })
        .then(() => {
          this.$toasted.global.success_message({
            message: 'register success, you can now log in',
          });

          this.$router.push('/login');
        })
        .catch((err) => {
          this.$toasted.global.error_message({
            message: err.response.data.message,
          });
        });
    },
    toLoginPage() {
      this.$router.push('/login');
    },
  },
  components: {
    'reusable-button': Button,
    'nav-bar': Navbar,
    HFooter,
  },
};
</script>

<style>
  .login-register-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .footer {
    margin-top: auto;
  }
</style>
