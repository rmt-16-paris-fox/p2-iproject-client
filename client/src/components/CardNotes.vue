<template>
    <div class="task bg-light shadow p-3 mt-2" >
        <textarea disabled class="form-control" cols="20" rows="5" :value="note.content"></textarea><br>
        <p>By: {{note.User.name}}</p>
    </div>
</template>

<script>
export default {
  name: 'CardTodos',
  props: ['note']
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
