<template>
  <div class="form-container">
    <form class="myForm" method="post" @submit.prevent="onSubmit">
      <h3>Register</h3>
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
          value="Sign Up"
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
      try {
        await axios({
          url: "/register",
          method: "POST",
          data: {
            email: this.email,
            password: this.password,
          },
        });

        this.$router.push({ name: "Login" });
        Swal.fire("account created");
      } catch (err) {
        console.log(err);
        Swal.fire(err.response.data.msg);
      }
    },
  },
};
</script>

<style></style>
