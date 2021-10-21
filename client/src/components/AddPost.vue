<template>
  <div class="add-post" >
    <div class="messageSender">
          <div class="messageSender__top">
            <form @submit.prevent="addPost">
              <input v-model="content" class="messageSender__input" placeholder="What's on your mind?" type="text" />
              <button class="btn button-primary" >POST</button>
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

<style scoped>
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

.add-post{
  width: 600px;
  margin: auto;
}

.file-upload{
  height:30px;
  width:30px;
  margin-top: 10px;
  margin-bottom: 10px;
  left: 450px;
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
