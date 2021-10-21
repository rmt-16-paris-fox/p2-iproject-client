<template>
  <div>
    <div class="container d-block d-lg-flex footer-top row m-auto">
      <div
        class="
          logo-group
          col-12 col-lg-3
          d-flex
          justify-content-center justify-content-lg-start
        "
      >
        <img src="../assets/background/logo-footer.svg" alt="logo footer" />
      </div>

      <div class="navigation-footer col-12 col-lg-7 text-center mt-5 mt-lg-0">
        <ul
          class="
            d-block d-lg-flex
            h-100
            align-items-center
            justify-content-center
            g-50
          "
        >
          <li class="list-unstyled">
            <router-link
              to="/"
              class="text-decoration-none f-s-16 font-weight-bold text-white"
              >Home</router-link
            >
          </li>
          <li class="list-unstyled mt-3 mt-lg-0">
            <router-link
              to="/partner"
              class="text-decoration-none f-s-16 font-weight-bold text-white"
              >Colaborative Partner</router-link
            >
          </li>
          <li class="list-unstyled mt-3 mt-lg-0">
            <router-link
              to="/about"
              class="text-decoration-none f-s-16 font-weight-bold text-white"
              >About</router-link
            >
          </li>
        </ul>
      </div>

      <div
        class="
          sosial-media-footer
          justify-content-center
          col
          align-self-center
          justify-content-lg-end
          d-flex
          mt-5 mt-lg-0
        "
      >
        <a
          href="https://www.facebook.com/dagelan.co/"
          target="_blank"
          class="
            btn
            soc-med
            rounded-circle
            b-yellow
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <img src="../assets/facebook.png" alt="facebook icon" width="24px" />
        </a>
        <a
          href="https://www.instagram.com/dagelan/"
          target="_blank"
          class="
            btn
            soc-med
            rounded-circle
            b-yellow
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <img
            src="../assets/instagram.png"
            alt="instagram icon"
            width="24px"
          />
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="text-center f-s-14 text-white pt-3 pb-3 mb-0">
        Copyright &copy 2021 PT. Infia Media Pratama. All Rights Reserved.
      </p>
    </div>
    <div>
      <HFooter></HFooter>
    </div>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "FooterBottom",
  components: {
    HFooter,
  },
};
</script>

<style>
</style>
