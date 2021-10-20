<template>
    <div>
        <div class="container" id="regis-form">
            <div class="my-5 p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block">
                        <img src="https://cdn.dribbble.com/users/1787323/screenshots/15332475/media/903af6bcf4fd58ec2a0cc35e2cc8cc5a.png?compress=1&resize=700x700" alt="login image" class="img-fluid" style="background-position: center; background-size: cover;">
                    </div>
                    <div class="col-lg-7 p-5">
                        <div class="text-center">
                            <h1 class="h4 mb-4">Create an Account!</h1>
                        </div>
                        <form v-on:submit.prevent="RegisForm">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Name" v-model="name">
                            </div><br>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                            </div><br>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div><br>
                            <button type="submit" class="btn btn-dark" style="width:100%">
                                Register
                            </button>
                        </form>
                        <hr>
                        <div class="text-center">
                            <a href="" id="link" v-on:click.prevent="toLogin">Create an Account!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { success, error } from '../apis/alert'

export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/')
    },
    RegisForm () {
      const Payload = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('regis', Payload)
        .then((data) => {
          success('Registering Account Success')
          this.$router.push('/')
        })
        .catch((err) => {
          error(err.messages.join(','))
        })
    }
  }
}
</script>

<style>
#regis-form {
    border-radius: 10px;
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
