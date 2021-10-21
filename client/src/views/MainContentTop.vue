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
        v-for="(meme, i) in meme.data.memes"
        :key="i"
        :meme="meme"
      ></PartnerContent>
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
    meme() {
      return this.$store.state.memeData;
    },
  },
  created() {
    this.$store.dispatch("fetchCelebBirthday");
    this.$store.dispatch("fetchMeme");
  },
};
</script>

<style>
</style>
