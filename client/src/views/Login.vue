<template>
  <div class="form-container">
    <form class="myForm" method="post" @submit.prevent="onSubmit">
      <h3>Login</h3>
      <div class="form-group">
        <input
          class="form-control input-lg"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          v-model="email"
        />
        <input
          class="form-control input-lg"
          type="password"
          name="password"
          placeholder="password"
          v-model="password"
        />
      </div>

      <div class="form-group">
        <input
          type="submit"
          name="submit"
          class="btn btn-success btn-sm"
          value="Login"
        />
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "../apis/axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      console.log(this.email, this.password);
      try {
        const result = await axios({
          url: "/login",
          method: "POST",
          data: {
            email: this.email,
            password: this.password,
          },
        });

        localStorage.setItem("access_token", result.data.access_token);
        this.$store.commit("SET_LOGED_IN", true);
        this.$store.commit("SET_PREMIUM", result.data.premium);
        this.$router.push({ name: "Home" });
      } catch (err) {
        console.log("errors:", err.response);
        Swal.fire(err.response.data.msg);
      }
    },
  },
};
</script>

<style>
.form-container {
  min-height: 100vh;
  width: 100%;
  background-image: url("../assets/background-login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.myForm {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1.2rem;
  border-radius: 8px;
}
.myForm input {
  opacity: 1;
}
@media (max-width: 500px) {
  .myForm {
    min-width: 90%;
  }
}
</style>
