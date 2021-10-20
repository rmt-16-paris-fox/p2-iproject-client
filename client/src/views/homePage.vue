<template>
  <div>
    <navbar></navbar>
    <h1>Home Page</h1>
    <div class="card">
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>League Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tableRow
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @handleWatchlist="handleWatchlist"
          ></tableRow>
          </tbody>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
import tableRow from '../components/tableRow.vue'
import navbar from '../components/navbar.vue'
export default {
  name: 'homePage',
  data () {
    return {}
  },
  methods: {
    handleWatchlist (payload) {
      this.$store
        .dispatch('handleWatchlist', payload)
        .then((resp) => {
          console.log(resp, 'sukses add watchlist')
          this.$toast.open({
            message: 'Match Added To Watchlist',
            type: 'success',
            position: 'top-right'
          })
        })
        .catch((err) => {
          console.log(err, 'err add watchlist')
        })
    }
  },
  components: {
    tableRow,
    navbar
  },
  created () {
    this.$store.dispatch('getHomeData')
  },
  computed: {
    posts: function () {
      return this.$store.state.homeDatas
    }
  }
}
</script>

<style>
</style>
