<template>
  <div >
    <form
      @submit.prevent="login"
      class="card col-4 mx-auto  p-3 mb-2 bg-secondary text-white"
    >
      <h4>Login User</h4>

      <div class="form-group  position-relative ">
        <label for="InputEmail ">Alamat Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control "
          id="InputEmail"
          aria-describeby="emailHelp"
          placeholder="Masukkan email"
        />
      </div>
      <div class="form-group ">
        <label for="InputPassword">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control "
          id="InputPassword"
          placeholder="Password"
        />
      </div>
      <br />
      <div>
        <button type="submit" class="text-center">Login</button>
      </div>

      <div class="form-footer mt-2">
        <p>
          Belom punya account?
          <router-link to="/register">Register</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("submitLogin", payload).then(({ data }) => {
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        this.$store.commit("SET_ISLOGIN", true);
        this.$router.push("/").catch(err => {
          console.log(err.response.data);
        });
      });
    }
  },
  components: {}
};
</script>

<style>
.body {
  font-family: var(--font3);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
