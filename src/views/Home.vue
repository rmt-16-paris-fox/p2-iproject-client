<template>
  <div class="row mt-5">
    <div class="offset-4 col-4">
      <h1>Start Analyze Your Match</h1>
      <form @submit.prevent="findMatchHandler">
        <input type="text" class="form-control" v-model="matchId" placeholder="Input your match ID, e.g.: 6231598689">
        <input type="submit" value="Find" class="btn btn-primary btn-lg mt-4" style="width: 150px">
      </form>
    </div>
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
