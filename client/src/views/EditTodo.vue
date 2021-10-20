<template>
  <div>
    <!-- Navbar -->
    <Navbar></Navbar>

    <!-- FORM -->
    <div class="container-fluid p-lg-5">
      <div class="card p-lg-5 form-add">
        <h5>Edit Todo</h5>
        <hr>
        <form v-on:submit.prevent="EditTodo">
            <input v-model="title" class="form-control" type="text" placeholder="Title"><br>
            <input v-model="content" class="form-control" type="text" placeholder="Content"><br>
            <select name="tag" v-model="tag" class="form-control">
                <option value="" disabled selected>Select Tag</option>
                <option value="Bug">Bug</option>
                <option value="Feature">Feature</option>
                <option value="Other">Other</option>
            </select>
            <br>
            <button class="btn btn-add mx-1" type="submit">Edit</button>
            <a href="" class="btn btn-cancel mx-1" v-on:click.prevent="toHome">cancel</a>
        </form>
      </div>
   </div>
  </div>
</template>

<script>
import { success, error } from '../apis/alert'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'EditTodo',
  data: function () {
    return {
      title: '',
      content: '',
      tag: ''
    }
  },
  methods: {
    getData () {
      this.$store.dispatch('getData', this.$route.params.id)
        .then((data) => {
          this.title = data.title
          this.content = data.content
          this.tag = data.tag
        })
        .catch((err) => {
          error(err.messages.join(','))
        })
    },
    EditTodo () {
      const payload = {
        id: this.$route.params.id,
        title: this.title,
        content: this.content,
        tag: this.tag
      }

      this.$store.dispatch('editTodo', payload)
        .then((data) => {
          success('Successfully to edit todo')
          this.$router.push('/home')
        })
        .catch((err) => {
          error(err.message.join(','))
        })
    },
    toHome () {
      this.$router.push('/home')
    }
  },
  components: {
    Navbar
  },
  created () {
    this.getData()
  }
}
</script>

<style>
label {
  text-align: left;
}
.btn-cancel{
    background-color: #ef5350;
    color: #ffff;
}
.btn-add{
    background-color: #4db6ac;
    color: #ffff;
}
.form-add{
  width: 700px;
  margin: auto;
}
</style>
