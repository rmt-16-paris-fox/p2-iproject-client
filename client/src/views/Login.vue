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
                        <form>
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
                            <button class="btn btn-dark" style="width:100%">
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

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>
#login-form {
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
