<template>
  <section id="ProfilePage">
    <div class="row mb-5">
      <div id="MyKeyboards" class="col-6">
        <h1>my orders</h1>
      </div>
      <div id="MyProfile" class="col-6">
        <h6 class="text-muted">{{credentials.name}}</h6>
        <h6 class="text-muted">{{credentials.email}}</h6>
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <KeyboardCard v-for="keyboard in myKeyboards" :key="keyboard.id" :keyboard="keyboard" :from="'profile'">
      </KeyboardCard>
    </div>
  </section>
</template>

<script>
import { alertError } from '@/apis/swal.js'
import KeyboardCard from '@/components/KeyboardCard.vue'
export default {
  name: 'ProfilePage',
  data: function () {
    return {
      credentials: {},
      myKeyboards: []
    }
  },
  methods: {
    getCredentials () {
      this.$store.dispatch('getCredentials')
        .then((data) => {
          this.credentials = data
        }).catch((err) => {
          alertError(err.message)
        })
    },
    getMyKeyboards () {
      this.$store.dispatch('getMyKeyboards')
        .then((data) => {
          this.myKeyboards = data
        }).catch((err) => {
          alertError(err.messsage)
        })
    }
  },
  created () {
    this.getMyKeyboards()
    this.getCredentials()
  },
  components: {
    KeyboardCard
  }
}
</script>

<style>
  #MyProfile {
    text-align: right;
  }
</style>
