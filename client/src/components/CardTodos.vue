<template>
    <div class="task bg-light shadow p-3 mt-2" v-if="category === todo.status">
        <h5>{{todo.title}}</h5>
        <hr>
        <p>{{todo.content}}</p>
        <p>{{todo.status}}</p>
        <p>By: {{todo.User.name}}</p>
    </div>
</template>

<script>
export default {
  name: 'CardTodos',
  props: ['todo', 'category']
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
</style>
