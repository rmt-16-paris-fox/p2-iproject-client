/* eslint-disable */ // eslint-disable-next-line //
<template>
  <div class="home">
    <!-- <Navbar></Navbar> -->
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
    <!-- Start Content -->
    <div class="container my-5" style="height: 40vh">
      <div class="row">
        <div class="col-12">
          <h2 style="font-weight: bold">
            Catat penjualan, dan stok produk. Semua dalam satu aplikasi
            <div class="row mt-4">
              <div class="col-6">
                <img
                  src="../img/cashier1.jpg"
                  alt=""
                  style="border-radius: 15px"
                />
              </div>
              <div class="col-6">
                <h4 style="font-weight: bold">Mengapa pilih cashier?</h4>
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="card" style="width: 15rem; border-radius: 15px">
                      <div class="card-body">
                        <h5 class="card-title" style="font-weight: bold">
                          Apapun Bisa, 1 aplikasi untuk kelola semua
                        </h5>
                        <h6>
                          Fitur lengkap untuk outlet dan karyawan tak terbatas
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="card" style="width: 15rem; border-radius: 15px">
                      <div class="card-body">
                        <h5 class="card-title" style="font-weight: bold">
                          Anti Ribet, Cocok untuk Semua
                        </h5>
                        <h6>Rasakan kemudahan cara pakainya</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
    <!-- Start Content -->
    <HFooter></HFooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '../components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'Home',
  components: {
    // Navbar,
    HFooter,
  },
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
