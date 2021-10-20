<template>
  <div class="home">
    <NavBar></NavBar>
    <AddPostForm @fetchPost="fetchAllPost"></AddPostForm>
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class=""
      @sendId="toEdit"
    ></PostCard>
    <EditPost v-if="editPage" :postEdit="postEdit" @fetchAllPost="fetchAllPost"></EditPost>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import PostCard from '../components/PostCard.vue'
import AddPostForm from '../components/AddPost.vue'
import EditPost from '../components/EditPost.vue'
export default {
  name: 'Home',
  data () {
    return {
      posts: [],
      postEdit: ''
    }
  },
  components: {
    NavBar,
    PostCard,
    AddPostForm,
    EditPost
  },
  methods: {
    fetchAllPost () {
      this.$store
        .dispatch('fetchAllPost')
        .then((data) => {
          this.posts = data
          console.log(data[0].Comments[0].comment)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    toEdit (data) {
      this.postEdit = data
    }
  },
  created () {
    this.fetchAllPost()
  },
  computed: {
    editPage () {
      return this.$store.state.editPage
    }
  }
}
</script>
