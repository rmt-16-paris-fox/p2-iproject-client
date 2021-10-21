<template>
  <div id="overview">
    <OverviewTable team-name="Radiant" />
    <OverviewTable team-name="Dire" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import OverviewTable from '@/components/OverviewTable.vue';

export default {
  name: 'MatchOverview',
  components: { OverviewTable },
  computed: {
    ...mapState(['matchData'])
  },
  methods: {
    ...mapActions(['fetchMatchData'])
  },
  async created() {
    await this.fetchMatchData(this.$route.params.matchId);
  }
}
</script>

<style scoped>
  #overview {
    text-align: left;
  }
</style>