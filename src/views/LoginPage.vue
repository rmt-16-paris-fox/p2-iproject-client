<template>
  <div class="row justify-content-center login">
    <div class="col-xl-10 col-lg-12 col-md-9 m-auto">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0 opacity">
          <div class="row">
            <div class="col-lg-6 d-none d-lg-block bg-login-image">
              <img src="../assets/login.jpg" />
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                </div>
                <form class="user">
                  <div class="form-group mb-4">
                    <input
                      v-model="email_login"
                      type="email"
                      class="form-control form-control-user"
                      id="email"
                      aria-describedby="email"
                      placeholder="Enter your email address..."
                    />
                  </div>
                  <div class="form-group mb-4">
                    <input
                      v-model="password_login"
                      type="password"
                      class="form-control form-control-user"
                      id="password"
                      placeholder="Enter your password..."
                      aria-describedby="password"
                      autoComplete="on"
                    />
                  </div>
                  <button
                    @click.prevent="submitLogin"
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Login
                  </button>
                  <hr />
                </form>
                <a class="btn btn-google btn-user btn-block">
                  <button
                    v-google-signin-button="clientId"
                    class="google-signin-button"
                  >
                    Continue with Google
                  </button>
                </a>
                <hr />
                <div class="text-center">
                  <router-link class="small" to="/"
                    >Back to Home |
                  </router-link>
                  <router-link class="small" to="/register"
                    >Create an Account!</router-link
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
import GoogleSignInButton from "vue-google-signin-button-directive";
export default {
  name: "LoginPage",
  directives: {
    GoogleSignInButton
  },
  data() {
    return {
      email_login: "",
      password_login: "",
      clientId:
        "133236021969-3vaoga3mkq0np8ug75efoel34k140ufq.apps.googleusercontent.com"
    };
  },
  methods: {
    submitLogin() {
      const payload = {
        email: this.email_login,
        password: this.password_login
      };
      this.$store
        .dispatch("submitLogin", payload)
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.$router.push("/");
          this.$store.commit("SET_ISLOGIN", true);
        })
        .catch(err => {
          console.log(err);
        });
    },
    OnGoogleAuthSuccess(idToken) {
      this.$store
        .dispatch("googleLogin", idToken)
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.$router.push("/");
          this.$store.commit("SET_ISLOGIN", true);
        })
        .catch(err => {
          console.log(err);
        });
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.login {
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
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
