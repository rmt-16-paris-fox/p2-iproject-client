<template>
  <section id="register" class="container">
    <div
      class="row justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="col-lg-5 d-none d-lg-block">
        <img src="@/assets/svg/register.svg" style="width: 120%" alt="" />
      </div>
      <div class="col-lg-6">
        <div class="card o-hidden border-0 shadow-lg">
          <div class="card-body p-0">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h2 text-gray-900">
                  <i class="fas fa-cookie-bite" style="color: #C36A2D"></i>
                  <strong>99Recipes</strong>
                </h1>
                <div v-if="registerErr.length != 0">
                  <span
                    v-for="(err, index) in registerErr"
                    :key="index"
                    class="badge badge-danger m-1 mt-0"
                    >{{ err }}</span
                  >
                </div>
              </div>
              <form
                class="row mt-4 text-left"
                v-on:submit.prevent="submitRegister"
              >
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="username">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      autocomplete="off"
                      placeholder="Your name"
                      name="name"
                      v-model="name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      autocomplete="off"
                      placeholder="Your unique username"
                      name="username"
                      v-model="username"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      autocomplete="off"
                      placeholder="Your own email"
                      name="email"
                      id="email"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input
                      type="number"
                      class="form-control"
                      autocomplete="off"
                      placeholder="Your own phone number"
                      name="phoneNumber"
                      id="phone"
                      v-model="phoneNumber"
                    />
                  </div>
                  <div class="form-group">
                    <label for="address">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      autocomplete="off"
                      placeholder="Your own address"
                      name="address"
                      id="address"
                      v-model="address"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="password">Password</label>
                    <input
                      id="pass1"
                      type="password"
                      autocomplete="off"
                      class="form-control"
                      name="password"
                      placeholder="Your strong password"
                      v-model="password"
                    />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Sign Up
                </button>
              </form>
              <hr />
              <div class="text-center">
                <p>
                  Already have account?
                  <router-link
                    to="/login"
                    class="text-decoration-none font-weight-bolder"
                    >Sign In</router-link
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
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import Swal from "sweetalert2";
import { swalSuccess, swalError, swalLoading } from "../apis/sweetAlert";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      phoneNumber: "",
      address: "",
      password: ""
    };
  },
  methods: {
    submitRegister() {
      const data = {
        name: this.name,
        username: this.username,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
        password: this.password
      };

      const loading = this.$store
        .dispatch("register", data)
        .then(response => {
          Swal.close();
          swalSuccess(
            "",
            "Account successfully registered. You can login now!"
          );
          this.$router.push("/login");
        })
        .catch(err => {
          Swal.close();
          this.$store.dispatch("registerErr", err.response.data.message);
        });

      swalLoading(loading);
    }
  },
  computed: {
    registerErr() {
      return this.$store.state.registerErr;
    }
  },
  created() {
    this.$store.commit("REMOVE_REGISTERERR");
  }
};
</script>

<style></style>
