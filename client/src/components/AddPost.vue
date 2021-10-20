<template>
  <div >
    <div class="white-space"></div>
    <form class="panel-activity__status" @submit.prevent="addPost">
      <textarea
        name="user_activity"
        placeholder="Share what you've been up to..."
        class="form-control"
        v-model="content"
      ></textarea>
      <div class="actions">
        <div class="btn-group">
          <input type="file" @change="file($event)">
        </div>
        <button class="btn btn-secondary">Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPostForm',
  data () {
    return {
      content: '',
      imageUrl: ''
    }
  },
  methods: {
    file (e) {
      this.imageUrl = e.target.files[0]
    },
    addPost () {
      const payload = {
        content: this.content,
        imageUrl: this.imageUrl
      }
      this.$store.dispatch('createPost', payload)
        .then((data) => {
          this.$emit('fetchPost', true)
          this.content = ''
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.panel-activity__status{
  width: 600px;
  margin: auto;
}
.white-space{
  width: 600px;
  height: 10px;
  margin: auto;
  margin-top: 20px;
  background-color: #5E8B7E;
}
.actions {
  display: flex;
  justify-content: space-between;
  background-color: #5E8B7E;
}
</style>
