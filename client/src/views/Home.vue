<template>
  <div class="home">
    <Navbar></Navbar>

    <!-- HOME -->
    <div class="container-fluid mt-5">
        <div class="row">
          <div class="row col-sm-3 mx-3" v-for="(category, index) in categories" :key="index">
              <h5 class="category">{{category}}</h5>
              <div class="task bg-light shadow p-3 mt-2">
                <h5>hahahaha</h5>
              </div>
              <h5 class="mt-2" v-if="category === 'Todo'">+ Add Task</h5>
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

export default {
  name: 'Home',
  data: function () {
    return {
      categories: ['Todo', 'Doing', 'Done']
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
.task {
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.category {
  text-align: left;
}
</style>
