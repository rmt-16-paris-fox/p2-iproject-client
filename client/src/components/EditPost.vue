<template>
  <div>
    <div id="overlay">
      <form class="panel_edit" @submit.prevent="editPost(postEdit)">
      <h2 id="edit-title">EDIT POST</h2>
      <button @click="close" type="button" class="btn-close btn-close-white" aria-label="Close"></button>
      <img :src="imageUrl" width="200" alt="" class="imageEdit">
        <textarea
          name="user_activity"
          placeholder="Share what you've been up to..."
          class="form-control"
          v-model="content"
        ></textarea>
        <div class="actions">
          <div class="btn-group">
            <input type="file" @change="file($event)" />
          </div>
          <button class="btn btn-secondary">Post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditPost',
  props: ['postEdit'],
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
    close () {
      this.$store.commit('SET_EDIT_PAGE', false)
    },
    editPost (id) {
      const payload = {
        id: id,
        content: this.content,
        imageUrl: this.imageUrl
      }
      this.$store.dispatch('editPost', payload)
        .then((data) => {
          this.$emit('fetchAllPost', true)
          this.$store.commit('SET_EDIT_PAGE', false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.$store.dispatch('getOnePost', this.postEdit)
      .then((data) => {
        this.content = data.content
        this.imageUrl = data.imageUrl
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>
#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: pointer;
  justify-content: center;
  justify-items: center;
  color: white;
}
.panel_edit {
  width: 600px;
  margin: auto;
  margin-top: 100px;
}
h2 {
color: white;
}

.imageEdit {
  display: block;
}

</style>
