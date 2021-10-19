<template>
  <div>
    <h1>Detail Page</h1>
<div class="card mb-3">
  <div class="flex-container">
  <img :src="details.data.teams.away.logo" width="150" height="150" alt="away team">
  <img :src="details.data.teams.home.logo" width="150" height="150" alt="home team">
  </div>

  <div class="card-body">
    <h5 class="card-title">{{ details.data.teams.away.name }} - {{ details.data.teams.home.name }}</h5>
    <p class="card-text">Venue: {{ details.data.fixture.venue.name }}, {{ details.data.fixture.venue.city }}</p>
    <p class="card-text">Time: {{ new Date(details.data.fixture.date).toLocaleString() }} WIB</p>
    <buttonClick
    label="Back"
    btnColor="btn btn-secondary my-2" btnType="button"
    @handleClick="goBack"
    ></buttonClick>
  </div>
</div>
  </div>
</template>

<script>
import buttonClick from '../components/buttonClick.vue'
export default {
  name: 'detailPage',
  components: {
    buttonClick
  },
  created () {
    // console.log(this.$route.params.id, 'params')
    this.$store.dispatch('handleDetailData', this.$route.params.id)
  },
  methods: {
    goBack () {
      this.$router.push({ name: 'watchlistPage' })
    }
  },
  computed: {
    details: function () {
      return this.$store.state.watchListDetail
    }
  }
}
</script>

<style>

</style>
