<template>
  <div>
    <form
      @submit.prevent="register"
      class="form-container col-4 mx-auto bg-light text-dark"
    >
      <h4 class="text-center font-weight-bold">Register</h4>
      <div class="">
        <img
        src="../assets/bunga matahari.jpg"
          class="img-fluid"
          alt="Sample image"
        />
      </div>

      <div class="form-group ">
        <label for="InputEmail-regis">Alamat Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="InputEmail-regis"
          aria-describeby="emailHelp"
          placeholder="Masukkan email"
        />
      </div>
      <div class="form-group ">
        <label for="userName-regis">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="userName-regis"
          placeholder="Masukkan username"
        />
      </div>
      <div class="form-group">
        <label for="address-regis">Address</label>
        <input
          v-model="address"
          type="text"
          class="form-control"
          id="address-regis"
          placeholder="jakarta"
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber-regis">Phone Number</label>
        <input
          v-model="phoneNumber"
          type="text"
          class="form-control"
          id="phoneNumbers-regis"
          placeholder="123456"
        />
      </div>
      <div class="form-group ">
        <label for="InputPassword-regis">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="InputPassword-regis"
          placeholder="Password"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary btn-block">Daftar</button>
      <div class="form-footer mt-2">
        <p>Sudah punya account? <router-link to="/login">Login</router-link> </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      username: "",
      phoneNumber: "",
      address: "",
      password: ""
    };
  },
  methods: {
    register() {
      const payload = {
        email: this.email,
        username: this.username,
        phoneNumber: this.phoneNumber,
        address: this.address,
        password: this.password
      };
      this.$store
        .dispatch("submitregister", payload)
        .then(data => {
          this.$store.commit("SET_ISLOGIN", true);
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  },
  components: {}
};
</script>

<style>

</style>
