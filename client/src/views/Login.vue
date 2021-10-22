<template>
    <div>
        <div class="container" id="login-form">
            <div class="my-5 p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block">
                        <img src="https://cdn.dribbble.com/users/1787323/screenshots/15332475/media/95646fef9e1c70317c81dfdca34e7fb6.png?compress=1&resize=900x900" alt="login image" class="img-fluid" style="background-position: center; background-size: cover;">
                    </div>
                    <div class="col-lg-7 p-5">
                        <div class="text-center">
                            <h1 class="h4 mb-4">Welcome Back!</h1>
                        </div>
                        <form v-on:submit.prevent="LoginForm">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                            </div><br>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div><br>
                            <button type="submit" class="btn btn-dark" style="width:100%">
                                Login
                            </button>
                        </form>
                            <hr>
                            <button class="btn btn-dark" style="width:100%" v-google-signin-button="this.clientId">
                                Login with Google
                            </button>
                        <hr>
                        <div class="text-center">
                            <a href="" id="link" v-on:click.prevent="toRegister">Create an Account!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { success, error } from '../apis/alert'
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      clientId: '63726053264-i1j3vqfdp7d8si6lm222hvosjnf1pqno.apps.googleusercontent.com'
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    LoginForm () {
      const Payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', Payload)
        .then(() => {
          success('Login Success')
          this.$router.push('/home')
        })
        .catch((err) => {
          error(err.messages.join(','))
        })
    },
    OnGoogleAuthSuccess (idToken) {
      this.$store.dispatch('loginGoogle', idToken)
        .then(() => {
          success('Login Success')
          this.$router.push('/home')
        })
        .catch((err) => {
          error(err.message.join(','))
        })
    },
    OnGoogleAuthFail (err) {
      console.log(err)
    }
  },
  directives: {
    GoogleSignInButton
  }
}
</script>

<style>
#login-form {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.container {
    margin-top: 100px;
    display: flex;
    justify-content: center;
}

#link {
    color: #90a4ae;
}

.text-center {
    text-align: center;
}
</style>
