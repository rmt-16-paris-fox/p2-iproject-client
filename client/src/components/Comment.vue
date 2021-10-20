<template>
  <div class="d-flex flex-row mb-2">
    <img :src="comment.User.imageUrl" width="40" class="rounded-image" />
    <div class="d-flex flex-column ml-2 profile-comment">
      <span class="name">{{ comment.User.fakeName }}</span>
      <small class="comment-text">{{ comment.comment }}</small>
      <div class="delete" v-if="userData.id == comment.UserId">
      <a class="deleteComment" href="" @click.prevent="deleteComment(comment.id)">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['comment'],
  data () {
    return {
      userData: ''
    }
  },
  methods: {
    deleteComment (id) {
      this.$store.dispatch('deleteComment', id)
        .then((data) => {
          this.$emit('fetchAllPost')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchUserData () {
      this.$store.dispatch('getUserData')
        .then((data) => {
          this.userData = data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchUserData()
    // console.log(this.comment.UserId)
  }
}
</script>

<style scoped>
.name {
  margin-left: 10px;
  margin-top: 10px;
}
.comment-text {
  margin-left: 10px;
  font-size: 15px;
}

a{
  text-decoration: none;
}
.delete{
  display: relative;
}

</style>
