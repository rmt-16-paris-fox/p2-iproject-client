<template>
    <tr>
      <td style="text-align:center">{{ post.teams.away.name }}</td>
      <td style="text-align:center">{{ post.teams.home.name }}</td>
      <td style="text-align:center">{{ post.league.name }}</td>
      <td style="text-align:center">{{ new Date(post.fixture.date).toLocaleString() }}</td>
      <td style="text-align:center">
        <buttonClick
        v-if="$route.name == 'homePage'"
        label="Add Watch list"
        btnColor="btn btn-secondary my-2" btnType="button"
        @handleClick="handleWatchlist(post)"
        ></buttonClick>
        <buttonClick
        v-if="$route.name == 'watchlistPage'"
        label="Detail"
        btnColor="btn btn-secondary my-2" btnType="button"
        @handleClick="toDetail"
        ></buttonClick>
      </td>
    </tr>
</template>

<script>
import buttonClick from '../components/buttonClick.vue'
export default {
  name: 'tableRow',
  components: {
    buttonClick
  },
  props: ['post'],
  methods: {
    handleWatchlist (payload) {
      // console.log('Watchlist click', payload)
      this.$emit('handleWatchlist', payload)
    },
    toDetail () {
      this.$emit('toDetail')
    }
  }
}
</script>

<style>

</style>
