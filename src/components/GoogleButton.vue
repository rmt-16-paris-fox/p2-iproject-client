<template>
  <g-signin-button
    class="btn btn-secondary form-control py-2"
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Continue with Google
  </g-signin-button>
</template>

<script>
import { alertSuccess, alertError } from '../apis/swal'
export default {
  name: 'GoogleButton',
  props: ['page'],
  data () {
    return {
      googleSignInParams: {
        client_id: '335156516849-sjett3juuoittgsk8pt54d49l6bo541d.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      const idToken = googleUser.getAuthResponse().id_token
      this.$store.dispatch('googleLogin', idToken)
        .then((data) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('SET_IS_LOGGED_IN', true)
          if (data.role === 'Administrator') {
            this.$store.commit('SET_IS_ADMIN', true)
          } else {
            this.$store.commit('SET_IS_ADMIN', false)
          }
          this.$router.push('/profile')
          alertSuccess('Welcome to Health Supply!')
        }).catch((err) => {
          alertError(err.message)
        })
    },
    onSignInError (error) {
      alertError('Google Sign In Failed :c')
      console.log(error)
    }
  }
}
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #26466a;
  border: 1px solid black;
}
.g-signin-button:hover {
  cursor: pointer;
}
</style>
