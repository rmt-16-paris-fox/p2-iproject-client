<template>
  <div class="container mt-5 mb-5">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="d-flex justify-content-between p-2 px-3">
            <div class="d-flex flex-row align-items-center test">
              <img
                :src="post.User.imageUrl"
                width="50"
                class="rounded-circle"
              />
              <div class="d-flex flex-column ml-2">
                <span class="font-weight-bold">
                  <strong>{{ post.User.fakeName }}</strong></span
                >
              </div>
              <div class="action" v-if="userData.id == post.UserId">
                <a href="" @click.prevent="toEdit(post.id)">Edit</a> ||
                <a href="">Delete</a>
              </div>
            </div>
          </div>
          <img src="" class="img-fluid" />
          <div class="p-2">
            <img :src="post.imageUrl" v-if="post.imageUrl" alt="">
            <p class="text-justify">{{ post.content }}</p>
            <hr />
            <div class="comments">
              <Comment
                v-for="comment in post.Comments"
                :key="comment.id"
                :comment="comment"
                @fetchAllPost="fetchAllPost"
              ></Comment>
              <div class="comment-input">
                <form action="" @submit.prevent="test(post.id)">
                <input type="text" v-model="comment" class="form-control" placeholder="write comment here..."/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
export default {
  name: 'PostCard',
  props: ['post'],
  data () {
    return {
      comment: '',
      userData: ''
    }
  },
  components: {
    Comment
  },
  methods: {
    fetchAllPost () {
      this.$emit('fetchAllPost')
    },
    toEdit (id) {
      this.$store.commit('SET_EDIT_PAGE', true)
      this.$emit('sendId', id)
    },
    test (id) {
      const payload = {
        id: id,
        comment: this.comment
      }
      this.$store.dispatch('addComment', payload)
        .then((data) => {
          this.$emit('fetchAllPost')
          this.comment = ''
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
  }
}
</script>
<style scoped>
.container{
  width: 600px;
}
.card {
  border: none;
  width: 500px;
  position: relative;
  left: -35%;
}
.ellipsis {
  color: #a09c9c;
}

.action {
 position: absolute;
 left: 400px;
}
.muted-color {
  color: #a09c9c;
  font-size: 13px;
}

.ellipsis i {
  margin-top: 3px;
  cursor: pointer;
}

.icons i {
  font-size: 25px;
}

.icons .fa-heart {
  color: red;
}

.icons .fa-smile-o {
  color: yellow;
  font-size: 29px;
}

.rounded-image {
  border-radius: 50% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
}

.name {
  font-weight: 600;
}

.comment-text {
  font-size: 12px;
}

.status small {
  margin-right: 10px;
  color: blue;
}

.form-control {
  border-radius: 26px;
}

.comment-input {
  position: relative;
}

.fonts {
  position: absolute;
  right: 13px;
  top: 8px;
  color: #a09c9c;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #8bbafe;
  outline: 0;
  box-shadow: none;
}

.text-justify{
font-size: 25px;
}
</style>
