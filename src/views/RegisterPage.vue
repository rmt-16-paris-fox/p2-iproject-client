<template>
  <div class="row justify-content-center register">
    <div class="col-xl-10 col-lg-12 col-md-9 m-auto">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <div class="row register-row">
            <div class="col-lg-6 d-none d-lg-block bg-register-image">
              <img src="../assets/login.jpg" />
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form v-on:submit.prevent="submitRegister" class="user">
                  <div class="form-group mb-4">
                    <input
                      v-model="username_register"
                      type="text"
                      class="form-control form-control-user"
                      id="username"
                      placeholder="Enter your username"
                      autoComplete="username"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <input
                      v-model="email_register"
                      type="text"
                      class="form-control form-control-user"
                      id="email"
                      placeholder="Enter your email address"
                      autoComplete="email"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <input
                      v-model="password_register"
                      type="password"
                      class="form-control form-control-user"
                      id="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Register Account
                  </button>
                </form>
                <hr />
                <div class="text-center">
                  <router-link class="small" to="/"
                    >Back to Home |
                  </router-link>
                  <router-link class="small" to="/login"
                    >Already have an account? Login!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      username_register: "",
      email_register: "",
      password_register: ""
    };
  },
  methods: {
    submitRegister() {
      const payload = {
        username: this.username_register,
        email: this.email_register,
        password: this.password_register
      };
      this.$store
        .dispatch("submitRegister", payload)
        .then(({ data }) => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/login.jpg");
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
