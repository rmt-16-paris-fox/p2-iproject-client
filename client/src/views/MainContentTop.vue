<template>
  <main id="main" class="position-relative b-pink main-top">
    <FollowerGraph></FollowerGraph>
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
        v-for="(meme, i) in memeDirect.memes"
        :key="i"
        :meme="meme"
      ></PartnerContent>
      <span>{{ meme }}</span>
    </div>
  </main>
</template>

<script>
import FollowerGraph from "@/components/FollowerGraph.vue";
import CardMainContent from "@/components/CardMainContent.vue";
import PartnerContent from "@/components/PartnerContent.vue";
export default {
  name: "MainContentTop",
  components: {
    FollowerGraph,
    CardMainContent,
    PartnerContent,
  },
  computed: {
    celebBirth() {
      return this.$store.state.celebBirth;
    },
    memeDirect() {
      return this.$store.state.memeDataDirect;
    },
  },
  created() {
    this.$store.dispatch("fetchMemeDirect");
  },
};
</script>

<style>
</style>
