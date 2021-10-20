<template>
  <div class="home">
    <Navbar></Navbar>

    <!-- HOME -->
    <div class="container-fluid mt-5">
        <div class="row">
          <div class="row col-sm-3 mx-3" v-for="(category, index) in categories" :key="index">
              <h5 class="category">{{category}}</h5>
              <CardTodos v-for="todo in todos" :key="todo.id" :todo="todo" :category="category"></CardTodos>
          </div>
          <div class="col-lg-2">
            <h5 class="category">Notes & References</h5>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import CardTodos from '../components/CardTodos.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      categories: ['todo', 'doing', 'Done'],
      todos: []
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
    }
  },
  components: {
    Navbar,
    CardTodos
  },
  created () {
    this.getTodos()
  }
}
</script>

<style>
.category {
  text-align: left;
}
</style>
