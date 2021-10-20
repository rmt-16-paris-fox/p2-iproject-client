<template>
  <section id="KeyboardForm" class="row">
    <div class="col-6">
      <div class="card keyboard-form p-5 my-3">
        <h1 class="mb-3">
          {{page}} keyboard
        </h1>
        <form @submit.prevent="submit">
          <label>Kit / Case name</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="name">
          <label>Mounting Style *</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="mountingStyle">
          <label>Plate Material *</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="plateMaterial">
          <label>Keycaps</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="keycaps">
          <label>Switches</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="switches">
          <label>Miscellaneous *</label>
          <input type="text" class="form-control mt-1 mb-3" v-model="miscellaneous">
          <label>Payment Status</label>
          <select class="form-control mt-1 mb-3" v-model="isPaid">
            <option value='true'>Done</option>
            <option value='false'>Not Yet</option>
          </select>
          <label>Work Status</label>
          <select class="form-control mt-1 mb-3" v-model="isDone">
            <option value='true'>Done</option>
            <option value='false'>Not Yet</option>
          </select>

          <label>User Id</label>
          <select class="form-control mt-1 mb-3" v-model="UserId">
            <option  v-for="user in users" :key="user.id" :value="user.id">{{user.email}} || {{user.id}}</option>
          </select>

          <small>* leave empty for default configuration</small>
          <input type="submit" value="Submit" class="form-control mt-4 py-2 btn-secondary">
          <router-link to="/admin" class="form-control mt-3 py-2 btn-secondary text-center">Back</router-link>
        </form>
      </div>
    </div>
    <div class="col-6" v-if="page === 'update'">
      <h1>hellos</h1>
    </div>
  </section>
</template>

<script>
import { alertError, alertSuccess } from '../apis/swal'
export default {
  name: 'KeyboardForm',
  data: function () {
    return {
      name: '',
      mountingStyle: '',
      plateMaterial: '',
      keycaps: '',
      switches: '',
      miscellaneous: '',
      isDone: false,
      isPaid: false,
      UserId: '',
      users: []
    }
  },
  methods: {
    submit () {
      const payload = {
        name: this.name,
        mountingStyle: this.mountingStyle,
        plateMaterial: this.plateMaterial,
        keycaps: this.keycaps,
        switches: this.switches,
        miscellaneous: this.miscellaneous,
        isDone: this.isDone,
        isPaid: this.isPaid,
        UserId: this.UserId
      }
      if (this.page === 'Add') {
        this.$store.dispatch('addKeyboard', payload)
          .then((data) => {
            alertSuccess(`${data.name} created with id ${data.id}`)
            this.$router.push('/admin')
          }).catch((err) => {
            const message = err.message.join(', ')
            alertError(message)
          })
      } else if (this.page === 'Update') {
        // this.$store.dispatch('addKeyboard', payload)
        console.log('updateKeyboard', payload)
      }
    },
    fetchUsers () {
      this.$store.dispatch('fetchUsers')
        .then((data) => {
          this.users = data
        }).catch((err) => {
          alertError(err.message)
          console.log(err)
        })
    }
  },
  computed: {
    page () {
      if (this.$router.currentRoute.path === '/add') {
        return 'Add'
      } else {
        return 'Update'
      }
    }
  },
  created () {
    this.fetchUsers()
  }
}
</script>

<style>
  #KeyboardForm .keyboard-form {
    width: 100%;
  }

   #KeyboardForm input[type="submit"] {
    background-color: #26466a;
  }

  #KeyboardForm input[type="submit"]:hover {
    background-color: #1b3655;
  }
</style>
