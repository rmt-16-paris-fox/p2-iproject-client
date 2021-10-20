<template>
  <div>
    <div></div>

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
    <!-- <chat-icon /> -->
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import { mapState, mapActions } from "vuex";
// import ChatIcon from "../components/ChatIcon.vue";

export default {
  components: { Cards },
  name: "Home",
  data() {
    return {
      search: "",
      options: [1, 2],
    };
  },
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
