<template>
  <div>
    <Header />
    <div class="flex flex-wrap justify-center -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-5">
        <div class="border border-gray-200 p-6 rounded-lg bg-gray-300">
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
              v-if="detailAnimal.name === 'Kerbau'"
              class="iconify"
              data-icon="emojione:water-buffalo"
              data-width="30"
              data-height="30"
            ></span>
            <span
              v-else-if="detailAnimal.name === 'Sapi'"
              class="iconify"
              data-icon="emojione:cow"
              data-width="30"
              data-height="30"
            ></span>
            <span
              v-else-if="detailAnimal.name === 'Ayam'"
              class="iconify"
              data-icon="emojione:chicken"
              data-width="30"
              data-height="30"
            ></span>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
            {{ detailAnimal.name }}
          </h2>
          <p class="leading-relaxed text-base">
            Rp{{ Number(detailAnimal.tax).toLocaleString("id-ID") }} / ekor
          </p>
          <div class="relative">
            <label for="qty">Jumlah: </label>
            <select
              id="qty"
              name="qty"
              @change="jumlah($event)"
              class="
                rounded
                border
                appearance-none
                border-gray-300
                py-1
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-200
                focus:border-indigo-500
                text-base
                pl-3
                pr-3
              "
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button
            @click="pay"
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
            Bayar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "DetailAnimal",
  components: {
    Header,
  },
  data() {
    return {
      jumlahYangDibayar: 0,
      aaName:
        this.$route.params.name.charAt(0).toUpperCase() +
        this.$route.params.name.slice(1),
    };
  },
  methods: {
    jumlah(event) {
      this.jumlahYangDibayar = event.target.value;
    },
    pay() {
      this.$store.dispatch("payment");
    },
  },
  computed: {
    detailAnimal() {
      return this.$store.state.detailAnimal;
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("fetchAnimalByName", this.$route.params.name);
    console.log(this.aaName);
  },
};
</script>

<style>
</style>