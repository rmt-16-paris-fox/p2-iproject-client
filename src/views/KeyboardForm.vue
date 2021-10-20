<template>
  <section id="KeyboardForm" class="row">
    <div class="col-6">
      <div class="card keyboard-form p-5 my-3">
        <h1 class="mb-3">
          {{page}} keyboard
        </h1>
        <form @submit.prevent="submit">
          <label>Kit / Case name</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="name">
          <label>Mounting Style *</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="mountingStyle">
          <label>Plate Material *</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="plateMaterial">
          <label>Keycaps</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="keycaps">
          <label>Switches</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="switches">
          <label>Miscellaneous *</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="miscellaneous">
          <label>Payment Status</label>
          <select class="form-select mt-1 mb-3" v-model="isPaid">
            <option value="true">Done</option>
            <option value="false">Not Yet</option>
          </select>
          <label>Work Status</label>
          <select class="form-select mt-1 mb-3" v-model="isDone">
            <option value="true">Done</option>
            <option value="false">Not Yet</option>
          </select>

          <label>User Id</label>
          <select class="form-select mt-1 mb-3" v-model="UserId">
            <option  v-for="user in users" :key="user.id" :value="user.id" :selected="(UserId === user.id)">{{user.email}} || {{user.id}}</option>
          </select>

          <small>* leave empty for default configuration</small>
          <input type="submit" value="Submit" class="form-control mt-4 py-2 btn-secondary">
          <router-link to="/admin" class="form-control mt-3 py-2 btn-secondary text-center">Back</router-link>
        </form>
      </div>
    </div>
    <div class="col-6"  v-if="page === 'Add'">
      <div class="card keyboard-form p-5 my-3">
        <h1 class="mb-3">
          {{page}} images
        </h1>
        <form @submit.prevent="submitImage" enctype="multipart/form-data">
          <label>Image 1</label>
          <input type="file" class="form-control mt-1 mb-3" @change="fileChange1">

          <label>Image 2</label>
          <input type="file" class="form-control mt-1 mb-3" @change="fileChange2">

          <label>Image 3</label>
          <input type="file" class="form-control mt-1 mb-3" @change="fileChange3">

          <label>Image 4</label>
          <input type="file" class="form-control mt-1 mb-3" @change="fileChange4">

          <label>Keyboard Id</label>
          <select class="form-select mt-1 mb-3" v-model="KeyboardId">
            <option  v-for="keyboard in keyboards" :key="keyboard.id" :value="keyboard.id">{{keyboard.name}} || {{keyboard.User.email}} || {{keyboard.id}}</option>
          </select>

          <input type="submit" value="Submit" class="form-control mt-4 py-2 btn-secondary">
          <router-link to="/admin" class="form-control mt-3 py-2 btn-secondary text-center">Back</router-link>
        </form>
      </div>
    </div>
    <div class="col-6"  v-if="page === 'Update'">
      <div class="card keyboard-form p-5 my-3">
        <h1 class="mb-3">
          Delete images
        </h1>
        <form>
          <div v-for="(image, idx) in images" :key="idx" class="d-flex flex-column">
            <label>Image {{idx+1}}</label>
            <img :src="image.imageUrl" alt="" class="w-100 mb-3">
            <button @click.prevent="deleteImg(image.id)" class="btn btn-danger mb-4">Delete</button>
          </div>
          <router-link to="/admin" class="form-control mt-3 py-2 btn-secondary text-center">Back</router-link>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError, alertSuccess } from '../apis/swal'
export default {
  name: 'KeyboardForm',
  data: function () {
    return {
      name: '',
      mountingStyle: '',
      plateMaterial: '',
      keycaps: '',
      switches: '',
      miscellaneous: '',
      isDone: false,
      isPaid: false,
      UserId: '',

      users: [],
      keyboards: [],

      KeyboardId: '',
      file1: {},
      file2: {},
      file3: {},
      file4: {},

      keyboardData: {},
      currentId: '',

      images: []
    }
  },
  methods: {
    deleteImg (id) {
      // console.log(id)
      this.$store.dispatch('deleteImage', id)
        .then((data) => {
          this.getKeyboard()
          alertSuccess(data.message)
        }).catch((err) => {
          alertError(err.message)
        })
    },
    fileChange1 (event) {
      console.log('1')
      const imgFile = event.target.files[0]
      console.log(imgFile)
      this.file1 = imgFile
    },
    fileChange2 (event) {
      console.log('2')
      const imgFile = event.target.files[0]
      console.log(imgFile)
      this.file2 = imgFile
    },
    fileChange3 (event) {
      console.log('3')
      const imgFile = event.target.files[0]
      console.log(imgFile)
      this.file3 = imgFile
    },
    fileChange4 (event) {
      console.log('4')
      const imgFile = event.target.files[0]
      console.log(imgFile)
      this.file4 = imgFile
    },
    submit () {
      const payload = {
        name: this.name,
        mountingStyle: this.mountingStyle,
        plateMaterial: this.plateMaterial,
        keycaps: this.keycaps,
        switches: this.switches,
        miscellaneous: this.miscellaneous,
        isDone: this.isDone,
        isPaid: this.isPaid,
        UserId: this.UserId
      }
      if (this.page === 'Add') {
        this.$store.dispatch('addKeyboard', payload)
          .then((data) => {
            alertSuccess(`${data.name} created with id ${data.id}`)
            this.$router.push('/admin')
          }).catch((err) => {
            const message = err.message.join(', ')
            alertError(message)
          })
      } else if (this.page === 'Update') {
        payload.keyboardId = this.currentId
        this.$store.dispatch('editKeyboard', payload)
          .then((data) => {
            alertSuccess(data.message)
            this.$router.push('/admin')
          }).catch((err) => {
            console.log(err)
            alertError(err.message)
          })
      }
    },
    // ! MASIH ERROR
    submitImage () {
      // const imgArray = [
      //   this.file1, this.file2, this.file3, this.file4
      // ]
      const images = new FormData()
      images.append('images', this.file1)
      images.append('images', this.file2)
      images.append('images', this.file3)
      images.append('images', this.file4)

      const payload = {
        images,
        keyboardId: this.KeyboardId
      }
      if (this.page === 'Add') {
        this.$store.dispatch('addImages', payload)
          .then((data) => {
            alertSuccess(`Image for keyboard id ${this.KeyboardId} uploaded!`)
            this.$router.push('/admin')
          }).catch((err) => {
            alertError(err.message)
          })
      }
    },
    fetchUsers () {
      this.$store.dispatch('fetchUsers')
        .then((data) => {
          this.users = data
        }).catch((err) => {
          alertError(err.message)
        })
    },
    fetchKeyboards () {
      this.$store.dispatch('fetchKeyboards')
        .then((data) => {
          this.keyboards = data
        }).catch((err) => {
          console.log(err.message)
        })
    },
    getKeyboard () {
      this.$store.dispatch('getKeyboard', Number(this.$route.params.keyboardId))
        .then((data) => {
          this.name = data.name
          this.mountingStyle = data.mountingStyle
          this.plateMaterial = data.plateMaterial
          this.keycaps = data.keycaps
          this.switches = data.switches
          this.miscellaneous = data.miscellaneous
          this.isPaid = data.isPaid
          this.isDone = data.isDone
          this.UserId = data.UserId
          this.currentId = data.id
          this.images = data.Images
        }).catch((err) => {
          alertError(err.message)
        })
    }
  },
  computed: {
    page () {
      if (this.$router.currentRoute.path === '/add') {
        return 'Add'
      } else {
        return 'Update'
      }
    }
  },
  created () {
    this.fetchUsers()
    if (this.page === 'Add') {
      this.fetchKeyboards()
    } else if (this.page === 'Update') {
      this.getKeyboard()
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;300;400;600;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
  }

  body {
    background-color: #fdf9f1;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Source Serif Pro', serif;
  }

  .swal2-title {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: #fdf9f1;
  }

  a:hover {
    color: #fdf9f1;
  }

  section {
    min-height: calc(100vh - 174px);
    padding: 30px 100px;
  }

  .footer-h8 {
    background-color: #26466a !important;
  }

  #KeyboardForm .keyboard-form {
    width: 100%;
  }

   #KeyboardForm input[type="submit"] {
    background-color: #26466a;
  }

  #KeyboardForm input[type="submit"]:hover {
    background-color: #1b3655;
  }
</style>
