<template>
  <div>
    <section class="wrapper">
      <div class="container">
        <div class="row">
          <cards
            v-for="(estate, index) in estateData"
            :key="index"
            :estate="estate"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { Cards },
  name: "Home",
  computed: {
    ...mapState(["estateData"]),
  },
  methods: {
    ...mapActions(["getEstate"]),
  },
  async created() {
    await this.getEstate();
  },
};
</script>

<style></style>
