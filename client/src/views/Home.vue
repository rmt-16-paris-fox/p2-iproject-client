/* eslint-disable */ // eslint-disable-next-line //
<template>
  <div class="home">
    <Navbar></Navbar>
    <!-- Start Jumbotron -->
    <div class="jumbotron mt-5 pt-5">
      <div
        class="row d-flex justify-content-center align-items-center"
        style="height: 90vh"
      >
        <div class="col-6">
          <h1 class="text-light pb-2">
            Website Cashier untuk Mencatat Transaksi Penjualan
          </h1>
          <button
            type="button"
            class="btn btn-lg mx-2 text-light"
            style="background-color: #301b3f"
          >
            Sign In
          </button>
          <button
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
                    <div class="card" style="width: 15rem">
                      <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold">
                          Apapun Bisa, 1 aplikasi untuk kelola semua
                        </h6>
                        <h5>
                          Fitur lengkap untuk outlet dan karyawan tak terbatas
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="card" style="width: 15rem">
                      <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold">
                          Anti Ribet, Cocok untuk Semua
                        </h6>
                        <h5>Rasakan kemudahan cara pakainya</h5>
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
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
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
