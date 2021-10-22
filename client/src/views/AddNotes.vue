<template>
  <div>
    <!-- Navbar -->
    <Navbar></Navbar>

    <!-- FORM -->
    <div class="container-fluid p-lg-5" style="margin-top:100px">
      <div class="card p-lg-5 form-add">
        <h5>Add Note</h5>
        <hr>
        <form v-on:submit.prevent="AddNote">
            <textarea v-model="content" class="form-control" type="text" placeholder="Content" rows="8"></textarea><br>
            <button class="btn btn-add mx-1" type="submit">Add</button>
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
  name: 'AddNote',
  data: function () {
    return {
      content: ''
    }
  },
  methods: {
    AddNote () {
      const payload = {
        content: this.content
      }

      this.$store.dispatch('addNote', payload)
        .then((data) => {
          success('Successfully to add note')
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
