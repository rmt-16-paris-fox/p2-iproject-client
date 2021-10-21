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
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="What city are you from?"
        solo-inverted
        @keyup="searchAutocomplete"
        @keyup.enter="findEstate"
        @click="findEstate"
      ></v-autocomplete>
      <v-autocomplete
        v-model="selectState"
        :loading="loadingState"
        :items="itemsState"
        :search-input.sync="searchState"
        cache-items
        class="mx-1"
        flat
        hide-no-data
        hide-details
        label="State?"
        solo-inverted
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
      loadingState: false,
      itemsState: [
        "AK",
        "AL",
        "AR",
        "AS",
        "AZ",
        "CA",
        "CO",
        "CT",
        "DC",
        "DE",
        "FL",
        "GA",
        "GU",
        "HI",
        "IA",
        "ID",
        "IL",
        "IN",
        "KS",
        "KY",
        "LA",
        "MA",
        "MD",
        "ME",
        "MI",
        "MN",
        "MO",
        "MS",
        "MT",
        "NC",
        "ND",
        "NE",
        "NH",
        "NJ",
        "NM",
        "NV",
        "NY",
        "OH",
        "OK",
        "OR",
        "PA",
        "PR",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VA",
        "VI",
        "VT",
        "WA",
        "WI",
        "WV",
        "WY",
      ],
      searchState: null,
      selectState: null,
      loading: false,
      items: [],
      search: null,
      select: null,
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
      await this.getEstate({ city: this.search, state_code: this.searchState });
    },
  },
};
</script>

<style></style>
