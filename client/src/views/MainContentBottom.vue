<template>
  <div class="shoping-cart b-yellow position-relative">
    <div class="back-colab-top d-md-block d-none">
      <img src="../assets/back-top-long.svg" alt="" class="b-white" />
    </div>
    <div class="back-colab d-md-block d-none">
      <img
        src="../assets/back-colab-long.png"
        alt=""
        class="position-absolute w-50 l-0"
      />
    </div>
    <div class="back-colab d-md-block d-none">
      <img
        src="../assets/back-colab-long.png"
        alt=""
        class="position-absolute w-50 r-0"
      />
    </div>
    <h3
      class="
        txt-shoping-title
        font-weight-bold
        fs-500-24
        c-dark
        pt-5
        text-center
        position-relative
      "
    >
      Colaborative Partner
    </h3>
    <div>
      <PartnerCard></PartnerCard>
    </div>
    <div class="more-produk text-center pb-5 z-99 position-relative">
      <a
        href="partner.html"
        class="
          btn-more-produk
          f-s-16
          font-weight-bold
          b-white
          c-brown
          z-99
          hvr-brown
        "
      >
        Lihat Semua Partner
      </a>
    </div>
    <img
      src="../assets/background/Slice2.svg"
      alt=""
      class="position-absolute b-0 r-0 l-0 w-100 -mb-1"
    />
    <img
      src="../assets/background/Slice.svg"
      alt=""
      class="w-100 z-99 b-brown -mb-1"
    />
  </div>
</template>

<script>
import PartnerCard from "@/components/PartnerCard.vue";
export default {
  name: "MainContentBottom",
  components: {
    PartnerCard,
  },
};
</script>

<style>
</style>
