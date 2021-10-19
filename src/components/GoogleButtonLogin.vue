<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError"
  >
    Sign in with Google
  </g-signin-button>
</template>

<script>
/* eslint-disable */
import Swal from "sweetalert2";

export default {
  data() {
    return {
      googleSignInParams: {
        client_id:
          "1031007865185-6p5s4d5fcdl7nakfbl1g2o3vbrqg3i4l.apps.googleusercontent.com"
      }
    };
  },
  methods: {
    onSignInSuccess(googleUser) {
      const idToken = googleUser.getAuthResponse().id_token;

      Swal.fire({
        title: '<i class="fas fa-cookie fa-5x fa-spin" style="color: #C36A2D">',
        html: "Loading",
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          this.$store
            .dispatch("loginGoogle", idToken)
            .then(response => {
              Swal.close();
              const access_token = response.data.access_token;
              localStorage.setItem("access_token", access_token);
              this.$router.push("/");
            })
            .catch(err => {
              Swal.close();
              this.$store.dispatch("loginErr", err.response.data.message);
            });
        }
      });
    },

    onSignInError(error) {
      console.log("OH NOES", error);
    }
  }
};
</script>

<style>
.g-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
