<template>
    <div class="task bg-light shadow p-3 mt-2" v-if="category === todo.status">
        <h5>{{todo.title}}</h5>
        <hr>
        <textarea v-model="todo.content" class="form-control" type="text" rows="4" disabled></textarea><br>
        <!-- STATUS -->
        <h5><span class="badge badge-pill feature" v-if="todo.tag === 'Feature'">{{todo.tag}}</span></h5>
        <h5><span class="badge badge-pill bug" v-if="todo.tag === 'Bug'">{{todo.tag}}</span></h5>
        <h5><span class="badge badge-pill other" v-if="todo.tag === 'Other'">{{todo.tag}}</span></h5>
        <!-- TAG -->
        <p>By: {{todo.User.name}}</p>
        <hr>
        <button class="btn mx-1" style="background-color: #ffb74d; color: #ffff;" v-if="todo.status == 'To do'" v-on:click.prevent="updateStatus('In Progress')">In Progress</button>
        <button class="btn mx-1" style="background-color: #ffb74d; color: #ffff;" v-if="todo.status === 'In Progress'" v-on:click.prevent="updateStatus('Done')">Done</button>

        <button class="btn btn-edit mx-1" v-on:click.prevent="editForm">Edit</button>
        <button class="btn btn-delete mx-1" v-on:click.prevent="deleteTodo">Delete</button>
    </div>
</template>

<script>
import { success, error } from '../apis/alert'
export default {
  name: 'CardTodos',
  props: ['todo', 'category'],
  methods: {
    editForm () {
      this.$router.push(`/edit/${this.todo.id}`)
    },
    deleteTodo () {
      this.$store.dispatch('delete', this.todo.id)
        .then((data) => {
          success(data[0])
          this.$emit('fetchTodo')
        })
        .catch((err) => {
          error(err.message.join(','))
        })
    },
    updateStatus (params) {
      const payload = {
        id: this.todo.id,
        status: params
      }
      this.$store.dispatch('updateStatus', payload)
        .then((data) => {
          success(data[0])
          this.$emit('fetchTodo')
        })
        .catch((err) => {
          error(err.message.join(','))
        })
    }
  }
}
</script>

<style>
.task {
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h5 {
    text-align: left;
}
p {
    text-align: left;
}
.feature{
    background-color: #ffab91;
}
.bug{
    background-color: #ef9a9a;
}
.other{
    background-color: #a5d6a7;
}
.btn-delete{
    background-color: #ef5350;
    color: #ffff;
}
.btn-edit{
    background-color: #4db6ac;
    color: #ffff;
}

</style>
