<template>
  <div>
    <header class="pt-0 pt-md-2">
      <Navbar></Navbar>
    </header>

    <main class="main-top-about position-relative">
      <div class="header-title m-auto">
        <h1
          class="
            c-darker-c
            fs-64
            text-center
            pb-2
            m-auto
            pt-70
            font-weight-bold
          "
        >
          Dagelan percaya kebahagiaan itu untuk dibagikan
        </h1>
      </div>

      <div class="rotate-group d-flex position-relative">
        <div class="rotate-wrap-left position-absolute l-0">
          <img
            src="../assets/background/spinner.svg"
            alt=""
            class="rotate rotate-left w-100 z-1 d-md-block d-none"
          />
        </div>
        <div class="rotate-wrap-right position-absolute r-0">
          <img
            src="../assets/background/spinner.svg"
            alt=""
            class="rotate rotate-right w-100 z-1 d-md-block d-none"
          />
        </div>
      </div>

      <img
        src="../assets//background/back-top-pink.svg"
        alt=""
        class="w-100 b-transparent z-99 position-relative"
      />
      <div class="b-pink pb-5 z-2 position-relative z-99 top-content-about">
        <div class="container d-flex mt-150 row m-auto">
          <div
            class="
              main-top-about-left
              tex-center
              d-flex
              justify-content-center
              mt-50
              col-md-6
            "
          >
            <img
              src="../assets/background/back-top-about.svg"
              alt=""
              class="image-main-top-about-left w-75 d-none d-md-block"
            />
          </div>
          <div class="main-top-about-right d-block align-self-end col-md-6">
            <h4 class="c-dark fs-32 font-weight-bold l-h-4">
              Awal mula Dagelan
            </h4>
            <p class="c-dark f-s-24 font-weight-bold mt-60 mb-2 l-h-4">
              Berdiri sejak 2014, Dagelan fokus untuk mengkurasi dan
              mengembangkan konten penuh kebahagiaan untuk dibagikan
            </p>
            <p class="f-s-18">
              Dagelan adalah bagian dari infia Group sebagai pionir dari
              perusahaan berbasis penyiaran dan aggregator konten digital
              Indonesia
            </p>
          </div>
        </div>
      </div>
    </main>

    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.footer {
  margin-top: -20% !important;
}
</style>
