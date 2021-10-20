<template>
  <div class="home">
    <Navbar></Navbar>

    <!-- HOME -->
    <div class="container-fluid mt-5">
        <div class="row">
          <div class="row col-sm-3 mx-3" v-for="(category, index) in categories" :key="index">
              <div class="col-10">
                <h5 class="category">{{category}}</h5>
              </div>
              <div class="col-2" v-if="category === 'To do'">
                <h5><button class="btn btn-add">+</button></h5>
              </div>
              <CardTodos v-for="todo in todos" :key="todo.id" :todo="todo" :category="category"></CardTodos>
          </div>
          <div class="col-lg-2">
            <h5 class="category">Notes & References</h5>
            <CardNotes v-for="note in notes" :key="note.id" :note="note"></CardNotes>
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
      notes: []
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
    }
  },
  components: {
    Navbar,
    CardTodos,
    CardNotes
  },
  created () {
    this.getTodos()
    this.getNotes()
  }
}
</script>

<style>
.category {
  text-align: left;
}
.btn-add {
  background-color: #9fa8da;
}
</style>
