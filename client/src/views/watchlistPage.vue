<template>
  <div>
    <navbar></navbar>
    <h1>Watchlist</h1>
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
          v-for="post in posts" :key="post.id"
          :post="post.data"
          @toDetail="toDetail(post.id)"
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
  name: 'watchlistPage',
  components: {
    tableRow,
    navbar
  },
  methods: {
    toDetail (id) {
      this.$router.push('/detailPage/' + id)
    }
  },
  created () {
    this.$store.dispatch('getUserWishlist')
  },
  computed: {
    posts: function () {
      return this.$store.state.wishlistDatas
    }
  }
}
</script>

<style>

</style>
