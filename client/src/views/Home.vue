<template>
  <div class="home">
    <NavBar></NavBar>
    <PostCard v-for="post in posts" :key="post.id" :post="post" class=""></PostCard>
    <!-- <PostCard></PostCard> -->
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import PostCard from '../components/PostCard.vue'

export default {
  name: 'Home',
  data () {
    return {
      posts: []
    }
  },
  components: {
    NavBar,
    PostCard
  },
  methods: {
    fetchAllPost () {
      this.$store.dispatch('fetchAllPost')
        .then((data) => {
          this.posts = data
          console.log(data[0].Comments[0].comment)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchAllPost()
  }
}
</script>
