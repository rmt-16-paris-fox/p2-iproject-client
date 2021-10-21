<template>
  <header
    class="
      b-linear-orange
      pt-0 pt-md-2
      pb-70
      header-top
      position-relative
      header-90
    "
  >
    <!-- navbar -->
    <Navbar></Navbar>
    <!-- navbar -->

    <img
      src="../assets/background/pill-4.svg"
      alt=""
      class="position-absolute l-0 b-0 back-top-brown"
    />

    <div class="main-header d-block d-md-flex container position-relative">
      <div class="txt-head container d-block z-99">
        <h1 class="f-s-64 font-weight-bold c-dark mt-5 mb-5 fs-500-36">
          Dagelan percaya kebahagiaan itu untuk dibagikan
        </h1>
        <div class="arrow-group mb-5 w-50 d-flex align-items-start">
          <a
            href="#main"
            class="
              b-white
              mr-0 mr-md-2
              d-flex
              justify-content-center
              align-items-center
              text-center
              b-pink
              py-2
              px-2
              br-62
              txt-deoration-none
            "
          >
            <img
              src="../assets/arrow-down-circle.png"
              alt=""
              class="arrow-down-icon"
            />
            <span
              class="
                txt-kepoin
                f-s-23
                fs-700-18 fs-500-16
                font-weight-bold
                txt-decoration-none
                c-brown
                ml-2
              "
            >
              Kepoin Yuk
            </span>
          </a>
        </div>
      </div>

      <div class="image-head container">
        <div class="background-main-pill">
          <img
            src="../assets/background/pill-5.svg"
            alt="background"
            class="position-absolute background-main-1"
          />
          <img
            src="../assets/background/pill-2.svg"
            alt="background"
            class="position-absolute background-main-2"
          />
          <img
            src="../assets/background/pill-1.svg"
            alt="background"
            class="position-absolute background-main-3"
          />
          <img
            src="../assets/background/pill-3.svg"
            alt="background"
            class="position-absolute background-main-4"
          />
        </div>
        <div class="mask-group position-relative">
          <img
            src="../assets/background/Mask-2.svg"
            alt="background"
            class="mask-2 mt-3 position-relative z-99 hvr-bob-1"
          />
          <img
            src="../assets/background/Mask-1.svg"
            alt="background"
            class="mask-1 position-realtive z-99 hvr-bob r-0"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Header",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
