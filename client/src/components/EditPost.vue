<template>
  <div>
    <div id="overlay">
      <div class="editpost">
      <div class="messageSender">
          <img :src="imageUrl" width="200" alt="" class="imageEdit">
          <div class="messageSender__top">
            <form @submit.prevent="editPost(postEdit)">
              <input v-model="content" class="messageSender__input" placeholder="What's on your mind?" type="text" />
              <button  @click="close" class="btn button-primary" >CANCEL</button>
              <button class="btn button-primary" >SUBMIT</button>
            </form>
          </div>

          <div class="messageSender__bottom">
            <div class="file-upload">
                <label for="image">Upload image</label>
                <img src="https://i.stack.imgur.com/dy62M.png" />
                <input type="file" name="image" @change="file($event)"/>
                </div>
          </div>
        </div>
    </div>
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

h2 {
color: white;
}

.imageEdit {
  display: block;
  margin: auto;
  margin-top: 10px;
}
.messageSender {
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 100%;
}

.messageSender__top {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;
}

.messageSender__top form {
  flex: 1;
  display: flex;
}

.messageSender__top form input {
  flex: 1;
  outline-width: 0;
  border: none;
  padding: 15px 20px;
  margin: 0 10px;
  border-radius: 999px;
  background-color: #eff2f5;
}

.messageSender__option h3 {
  font-size: medium;
  margin-left: 10px;
}

.editpost{
  width: 600px;
  margin: auto;
  margin-top: 100px;
}

.file-upload{
  height:30px;
  width:30px;
  margin-top: 10px;
  margin-bottom: 10px;
  left: 350px;
  border:1px solid #f0c0d0;
  border-radius:100px;
  overflow:hidden;
  position:relative;
}
.file-upload input{
  position:absolute;
  height:400px;
  width:400px;
  left:-200px;
  top:-200px;
  background:transparent;
  opacity:0;
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0)
}
.file-upload img{
  position: absolute;
  left: -15px;
  bottom: -15px;
  height:30px;
  width:30px;
  margin:15px;
}
</style>
