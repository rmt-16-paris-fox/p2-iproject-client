<template>
  <div class="flex flex-wrap justify-center -m-4">
    <div
      v-for="animal in dataList"
      :key="animal.id"
      class="xl:w-1/3 md:w-1/2 p-5"
    >
      <div class="border border-gray-200 p-6 rounded-lg">
        <div
          class="
            w-10
            h-10
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-indigo-300
            text-indigo-500
            mb-4
          "
        >
          <span
            v-if="animal.name == 'Kerbau'"
            class="iconify"
            data-icon="emojione:water-buffalo"
            data-width="30"
            data-height="30"
          ></span>
          <span
            v-else-if="animal.name == 'Sapi'"
            class="iconify"
            data-icon="emojione:cow"
            data-width="30"
            data-height="30"
          ></span>
          <span
            v-else-if="animal.name == 'Ayam'"
            class="iconify"
            data-icon="emojione:chicken"
            data-width="30"
            data-height="30"
          ></span>
        </div>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
          {{ animal.name }}
        </h2>
        <p class="leading-relaxed text-base">
          Rp{{ Number(animal.tax).toLocaleString("id-ID") }} / ekor
        </p>
        <button
          @click="details(animal.name.toLowerCase())"
          class="
            flex
            mx-auto
            mt-3
            text-white
            bg-indigo-500
            border-0
            py-2
            px-8
            focus:outline-none
            hover:bg-indigo-600
            rounded
            text-lg
          "
        >
          Pilih
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalListCard",
  computed: {
    dataList() {
      return this.$store.state.dataList;
    },
  },
  methods: {
    details(animalName) {
      this.$router.replace({
        name: "DetailAnimal",
        params: {
          name: animalName
        }});
    },
  },
};
</script>

<style>
</style>