<template>
  <section id="login" class="container">
    <div
      class="row justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="col-lg-6" style="z-index: 1">
        <div class="card o-hidden border-0 shadow-lg">
          <div class="card-body p-0">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h2 text-gray-900">
                  <i class="fas fa-cookie-bite" style="color: #C36A2D"></i>
                  <strong>99Recipes</strong>
                </h1>
                <div v-if="loginErr">
                  <p class="text-danger" v-text="loginErr"></p>
                </div>
              </div>
              <form class="mt-4 text-left" v-on:submit.prevent="submitLogin">
                <div class="form-group">
                  <label for="email">Username / Email</label>
                  <input
                    type="text"
                    class="form-control"
                    autocomplete="off"
                    placeholder="Enter your unique username or email"
                    name="email"
                    id="email"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    id="pass0"
                    type="password"
                    autocomplete="off"
                    class="form-control"
                    name="password"
                    placeholder="Enter you strong password"
                    v-model="password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
                <div class="text-center">or</div>
                <google-button-login
                  class="btn btn-primary btn-block"
                ></google-button-login>
                <hr />
              </form>
              <div class="text-center">
                <p>
                  Don't have account?
                  <router-link
                    to="/register"
                    class="text-decoration-none font-weight-bolder"
                    >Sign Up</router-link
                  >
                </p>
                <p>
                  In a hurry for cook?
                  <router-link
                    to="/"
                    class="text-decoration-none font-weight-bolder"
                    style="color: #C36A2D"
                    >Click Here</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 d-none d-lg-block">
        <img
          src="@/assets/svg/login.svg"
          style="width: 150%; margin-left: -150px; z-index: 0"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import googleButtonLogin from "@/components/GoogleButtonLogin.vue";
import Swal from "sweetalert2";
import { swalLoading } from "../apis/sweetAlert";

export default {
  name: "Login",
  components: {
    googleButtonLogin
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submitLogin() {
      const data = {
        email: this.email,
        password: this.password
      };

      const loading = this.$store
        .dispatch("login", data)
        .then(response => {
          const access_token = response.data.access_token;
          localStorage.setItem("access_token", access_token);
          this.$router.push("/");
          Swal.close();
        })
        .catch(err => {
          this.$store.dispatch("loginErr", err.response.data.message);
          Swal.close();
        });

      swalLoading(loading);
    }
  },
  computed: {
    loginErr() {
      return this.$store.state.loginErr;
    }
  }
};
</script>

<style></style>
