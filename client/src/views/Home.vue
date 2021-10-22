/* eslint-disable */ // eslint-disable-next-line //
<template>
  <div class="home">
    <!-- Start Jumbotron -->
    <div class="jumbotron">
      <div
        class="row d-flex justify-content-center align-items-center"
        style="height: 90vh"
      >
        <div class="col-6">
          <h1 class="text-light pb-2">
            Website Cashier untuk Mencatat Transaksi Penjualan
          </h1>
          <button
            @click.prevent="toLogin"
            type="button"
            class="btn btn-lg mx-2 text-light"
            style="background-color: #301b3f"
          >
            Sign In
          </button>
          <button
            @click.prevent="toRegister"
            type="button"
            class="btn btn-lg mx-2 text-light"
            style="background-color: #301b3f"
          >
            Register
          </button>
        </div>
      </div>
    </div>
    <!-- End Jumbotron -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {
    toLogin() {
      this.$router.push('/login')
    },
    toRegister() {
      this.$router.push('/register')
    },
  },
}
</script>

<style>
.jumbotron {
  background-image: url('../img/cashier2.jpg');
  height: 90vh;
}
h4 {
  text-align: center;
}
</style>
