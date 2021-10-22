<template>
  <div class="home">
    <Navbar></Navbar>
    <!-- HOME -->
    <div class="container-fluid" style="margin-top: 100px; margin-bottom:100px">
        <form v-on:submit.prevent="getTodos" style="width: 500px;margin: auto;">
          <div class="row">
            <div class="col-5">
              <input name="title" type="text" class="form-control" placeholder="Search by title..." v-model="title">
            </div>
            <div class="col-5">
              <select name="status" class="form-control" v-model="status">
                <option value="" disabled selected> Status </option>
                <option v-for="(category, index) in categories" :key="index+'A'" :value="category">{{category}}</option>
              </select>
            </div>
            <button type="submit" class="btn col-sm-2" style=" background-color: #9fa8da; color: #ffff">Search</button>
          </div>
        </form>
        <div class="row mt-5">
          <div class="col-sm-3 mx-3" v-for="(category, index) in categories" :key="index">
              <h5 class="category">{{category}}</h5>
              <CardTodos v-for="todo in todos" :key="todo.id" :todo="todo" :category="category" @fetchTodo="getTodos"></CardTodos>
              <div v-if="category === 'To do'">
                <h5><button class="btn mt-3" style="background-color: #9fa8da; color: #ffff" v-on:click.prevent="addTask">+ Add Todo</button></h5>
              </div>
          </div>
          <div class="col-lg-2">
            <h5 class="category">Notes & References</h5>
            <CardNotes v-for="note in notes" :key="note.id" :note="note"></CardNotes>
            <div>
              <h5><button class="btn mt-3" style=" background-color: #9fa8da; color: #ffff" v-on:click.prevent="addNote">+ Add Notes</button></h5>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import CardTodos from '../components/CardTodos.vue'
import CardNotes from '../components/CardNotes.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      categories: ['To do', 'In Progress', 'Done'],
      todos: [],
      notes: [],
      title: '',
      status: ''
    }
  },
  methods: {
    getTodos () {
      const payload = {
        title: this.title,
        status: this.status
      }
      this.$store.dispatch('getTodos', payload)
        .then((data) => {
          this.todos = data
          this.title = ''
          this.status = ''
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getNotes () {
      this.$store.dispatch('getNotes')
        .then((data) => {
          this.notes = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addTask () {
      this.$router.push('/add')
    },
    addNote () {
      this.$router.push('/note/add')
    }
  },
  components: {
    Navbar,
    CardTodos,
    CardNotes
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    }
  },
  created () {
    this.getTodos()
    this.getNotes()
    this.$socket.emit('log')
    this.sockets.subscribe('clientTime', (data) => {
      this.time = data
    })
  }
}
</script>

<style>
.category {
  text-align: left;
}
</style>
