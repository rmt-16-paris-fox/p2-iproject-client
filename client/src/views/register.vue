<template>
        <!--Register Section -->
        <section id="Register">
            <div class="container-LoRe">
                <div class="card d-flex" style="width: 18rem;">
                    <h1 class="text-center mt-3">Register Page</h1>
                    <form action="" id="FormLogin">
                        <div class="card-body">
                            <label>Email</label>
                            <input type="email" class="form-control mb-2" v-model="emailRegister">
                            <label>Password</label>
                            <input type="password"  class="form-control  mb-2" v-model="passwordRegister">

                            <label>Phone Number</label>
                            <input type="number" class="form-control mb-2" v-model="phoneRegister">

                            <label>Address</label>
                            <textarea class="form-control mb-2" v-model="addressRegister" cols="20" rows="5"></textarea>

                            <div class="d-grid gap-2">
                                <buttonClick label="Register" btnColor="btn btn-primary my-2 btn-block" btnType="button" @handleClick="handleRegister" ></buttonClick>
                            </div>

                            <div class="text-in-card mt-3">
                                <p>Already have an account? <a href="" @click.prevent="toLoginPage">Sign In</a></p>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </section>
        <!--Register Section -->
</template>

<script>
import buttonClick from '../components/buttonClick.vue'
export default {
  name: 'register',
  components: {
    buttonClick
  },
  data: function () {
    return {
      emailRegister: '',
      passwordRegister: '',
      phoneRegister: '',
      addressRegister: ''
    }
  },
  methods: {
    toLoginPage () {
      this.$router.push('login')
    },
    handleRegister () {
      this.$store.dispatch('handleRegister', {
        email: this.emailRegister,
        password: this.passwordRegister,
        phone: this.phoneRegister,
        address: this.addressRegister
      })
        .then((resp) => {
          // console.log(resp, 'data balikan register')
          this.$router.push('Login')
        })
        .catch(err => {
          // console.log(err, 'err data balikan register')
          if (err.response.data.msg) {
            this.$toast.open({
              message: err.response.data.msg,
              type: 'error'
            })
          } else {
            err.response.data.message.forEach(el => {
              this.$toast.open({
                message: el,
                type: 'error'
              })
            })
          }
        })
    }
  }
}
</script>

<style>

</style>
