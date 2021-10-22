<template>
  <div>
    <v-toolbar dark color="teal">
      <v-toolbar-title @click.prevent="toHome"
        >Real Estate Finder</v-toolbar-title
      >
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="city"
        item-text="city"
        item-value="state_code"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Look for your dream house here..."
        solo-inverted
        @keyup="searchAutocomplete"
        @keypress="findEstate"
        @click.prevent="findEstate"
      ></v-autocomplete>

      <v-btn color="primary" elevation="5" rounded @click.prevent="toCust"
        >Cust Support</v-btn
      >
    </v-toolbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["isLoggedIn", "stateData"]),
  },
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      state: null,
      city: [],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    ...mapActions(["logout", "searchCity", "getEstate"]),
    toHome() {
      this.$router.push({ name: "Home" });
    },
    toCust() {
      this.$router.push({ name: "Chat" });
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.city.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
    async searchAutocomplete() {
      await this.searchCity(this.search);
      this.city = this.stateData;
    },
    async findEstate() {
      await this.getEstate({
        city: this.search,
        state_code: this.select,
      });
    },
  },
  created() {
    if (this.search === null) {
      this.search = "new york";
      this.select = "NY";
      this.findEstate();
    }
  },
};
</script>

<style></style>
