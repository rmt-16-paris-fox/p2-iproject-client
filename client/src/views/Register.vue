<template>
  <div class="main">
    <section class="signup">
      <div class="container">
        <div class="signup-content">
          <div class="signup-form">
            <form method="POST" class="register-form" id="register-form" @submit.prevent="register">
            <h2 class="form-title">Sign up</h2>
              <div class="form-group">
                <label for="name"
                  ><i class="zmdi zmdi-account material-icons-name"></i
                ></label>
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  v-model="firstName"
                />
              </div>
              <div class="form-group">
                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  v-model="lastName"
                />
              </div>
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-email"></i></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="re-pass"
                  ><i class="zmdi zmdi-lock-outline"></i
                ></label>
                <input
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <select v-model="gender" class="form-select" aria-label="Default select example">
                  <option selected>Choose your gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  class="form-submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure>
              <img
                src="../../public/images/signup-image.jpg"
                alt="sing up image"
              />
            </figure>
           <router-link to="/login">I have an account</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { swalError, swalSuccess } from '../apis/swal'
export default {
  name: 'RegisterPage',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: ''
    }
  },
  methods: {
    register () {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        gender: this.gender
      }
      this.$store.dispatch('register', payload)
        .then((data) => {
          swalSuccess(data.message)
          this.$router.push('/login')
        })
        .catch((err) => {
          swalError(err.message)
        })
    }
  }
}
</script>

<style scoped>
.container{
  background-color: white;
  border-radius: 15%;
}
.form-title{
  color: #858a7f;
}
.main {
  background-color: #C9D8B6;
}
</style>
