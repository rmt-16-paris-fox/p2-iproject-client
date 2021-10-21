<template>
  <div>
    <header class="pt-0 pt-md-2 b-linear-orange-2">
      <div class="rotate-group d-flex position-relative">
        <div class="rotate-wrap-left-partner position-absolute l-0">
          <img
            src="../assets/background/spinner.svg"
            alt=""
            class="rotate rotate-left w-100 z-1 d-md-block d-none"
          />
        </div>
        <div class="rotate-wrap-right-partner position-absolute r-0">
          <img
            src="../assets/background/spinner.svg"
            alt=""
            class="rotate rotate-right w-100 z-1 d-md-block d-none"
          />
        </div>
      </div>
      <Navbar></Navbar>
      <div class="head-partner">
        <h1 class="c-darker f-s-48 text-center font-weight-bold pt-100">
          Content Partner
        </h1>
      </div>
    </header>
    <img
      src="../assets/back-bottom.svg"
      alt=""
      class="w-100 b-white background-top-partner"
    />

    <main class="main-partner">
      <div
        class="
          card-product-group
          w-90
          mb-5
          text-center
          row
          m-auto
          pb-150
          justify-content-center
        "
      >
        <PartnerContent
          v-for="(celeb, i) in celebBirth.data.Birthdays"
          :key="i"
          :celeb="celeb"
        ></PartnerContent>
      </div>
    </main>

    <FooterBottom class="b-brown position-relative"></FooterBottom>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterBottom from "@/components/FooterBottom.vue";
import PartnerContent from "@/components/PartnerContent.vue";
export default {
  name: "Partner",
  components: {
    Navbar,
    FooterBottom,
    PartnerContent,
  },
  computed: {
    celebBirth() {
      return this.$store.state.celebBirth;
    },
  },
  created() {
    this.$store.dispatch("fetchCelebBirthday");
  },
};
</script>

<style>
</style>
