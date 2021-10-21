<template>
  <div class="home">
    <Navbar></Navbar>
    <div>{{time}}</div>
    <!-- HOME -->
    <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-sm-3 mx-3" v-for="(category, index) in categories" :key="index">
              <h5 class="category">{{category}}</h5>
              <CardTodos v-for="todo in todos" :key="todo.id" :todo="todo" :category="category" @fetchTodo="getTodos"></CardTodos>
              <div v-if="category === 'To do'">
                <h5><button class="btn mt-3" style="background-color: #9fa8da" v-on:click.prevent="addTask">+ Add Todo</button></h5>
              </div>
          </div>
          <div class="col-lg-2">
            <h5 class="category">Notes & References</h5>
            <CardNotes v-for="note in notes" :key="note.id" :note="note"></CardNotes>
            <div>
              <h5><button class="btn mt-3" style=" background-color: #9fa8da" v-on:click.prevent="addNote">+ Add Notes</button></h5>
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
      time: ''
    }
  },
  methods: {
    getTodos () {
      this.$store.dispatch('getTodos')
        .then((data) => {
          this.todos = data
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
