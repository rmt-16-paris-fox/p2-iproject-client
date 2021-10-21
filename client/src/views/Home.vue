<template>
  <div class="home">
    <Header></Header>
    <div class="position-relative b-pink main-top pb-100">
      <MainContentTop></MainContentTop>
    </div>
    <div class="main-bottom b-white position-relative pt-100 pb-150">
      <ClientBanner></ClientBanner>
    </div>
    <MainContentBottom></MainContentBottom>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ClientBanner from "@/components/Client.vue";
import MainContentTop from "@/views/MainContentTop.vue";
import MainContentBottom from "@/views/MainContentBottom.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    MainContentTop,
    ClientBanner,
    MainContentBottom,
  },
};
</script>
