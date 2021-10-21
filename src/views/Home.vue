<template>
  <div>
    <Header />
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div
          class="flex flex-wrap w-full mb-12 flex-col items-center text-center"
        >
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-2
              text-gray-900
            "
          >
            Selamat Datang {{ userName }}
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Silahkan memilih hewan jenis hewan yang akan Anda potong.
          </p>
        </div>
        <AnimalListCard />
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AnimalListCard from "@/components/AnimalListCard.vue";

export default {
  name: "Home",
  components: {
    Header,
    AnimalListCard,
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    },
  },
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style>
</style>