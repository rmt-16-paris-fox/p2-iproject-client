<template>
  <section id="AdminPage">
    <h1>admin</h1>
    <router-link to='/add' class="btn btn-secondary my-3">
      <i class="fas fa-plus-square mx-2"></i>
      <div class="d-inline-block">Add Keyboard</div>
    </router-link>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>switches</th>
          <th>keycaps</th>
          <th>work status</th>
          <th>payment status</th>
          <th>user id</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="keyboard in keyboards" :key="keyboard.id">
          <td>{{keyboard.id}}</td>
          <td>{{keyboard.name}}</td>
          <td>{{keyboard.switches}}</td>
          <td>{{keyboard.keycaps}}</td>
          <td>{{keyboard.isDone}}</td>
          <td>{{keyboard.isPaid}}</td>
          <td>{{keyboard.UserId}}</td>
          <td>
            <router-link to='/update' class="btn">update</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { alertError } from '../apis/swal'
export default {
  name: 'AdminPage',
  data: function () {
    return {
      keyboards: []
    }
  },
  methods: {
    fetchKeyboards () {
      this.$store.dispatch('fetchKeyboards')
        .then((data) => {
          this.keyboards = data
        }).catch((err) => {
          alertError(err.message)
        })
    }
  },
  created () {
    this.fetchKeyboards()
  }
}
</script>

<style>
  #AdminPage table {
    min-width: 800px;
  }

  #AdminPage th{
    font-family: 'Source Serif Pro';
    font-size: 1.5em;
  }

  #AdminPage th, #AdminPage td{
    padding: 10px 30px 10px 0;
  }

  #AdminPage a {
    background-color: #26466a;
    color: #fdf9f1;
  }

  #AdminPage a:hover {
    background-color: #1b3655;
  }
</style>
