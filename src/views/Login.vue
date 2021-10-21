<template>
  <div>
    <section class="vh-90" style="background-color: #ffffff">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem">
              <div class="card-body p-5 text-center">
                <form @submit.prevent="handleLogin">
                  <h3 class="mb-5">Sign in</h3>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      class="form-control form-control-lg"
                      v-model="email"
                    />
                    <label class="form-label" for="typeEmailX-2">Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                      v-model="password"
                    />
                    <label class="form-label" for="typePasswordX-2"
                      >Password</label
                    >
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-start mb-4">
                    <!-- <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    /> -->
                    <!-- <label class="form-check-label" for="form1Example3">
                      Remember password
                    </label> -->
                  </div>

                  <button
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>

                  <hr class="my-4" />

                  <button
                    class="btn btn-lg btn-block btn-primary"
                    style="background-color: #dd4b39"
                    type="submit"
                    @click="googleSignIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                      />
                    </svg>
                    &nbsp;Sign in with google
                  </button>
                  <button
                    class="btn btn-lg btn-block btn-primary mb-2"
                    style="background-color: #3b5998"
                    type="submit"
                    @click="toRegister"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      /></svg
                    >&nbsp; Create account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/apis/server";
import Swal from "sweetalert2";
import router from "@/router";
export default {
  name: "Login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin: function () {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    toRegister: function () {
      this.$router.push("/register");
    },
    googleSignIn: function () {
      this.$gAuth
        .signIn()
        .then((response) => {
          var id_token = response.Zb.id_token;
          // console.log(id_token);
          axios({
            method: "POST",
            url: "/google-login",
            data: {
              token: id_token,
            },
          })
            .then((resp) => {
              console.log(resp.data.access_token);
              localStorage.setItem("access_token", resp.data.access_token);
              // this.$emit("toHome");
              router.push("/");
              this.$store.commit("SET_IS_LOGIN", true);
              // this.fetchFoods();
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response
                  ? `${err.response.data.message}`
                  : "Something Wrong!",
              });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
