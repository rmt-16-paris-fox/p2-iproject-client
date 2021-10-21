<template>
  <div>
    <form @submit.prevent="findMatchHandler">
      <input type="text" v-model="matchId">
      <input type="submit" value="Find">
    </form>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      matchId: ''
    }
  },
  methods: {
    findMatchHandler() {
      this.$router.push({ name: 'MatchOverview', params: { matchId: this.matchId }});
    }
  }
}
</script>
