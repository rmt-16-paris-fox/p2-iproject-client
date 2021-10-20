<template>
  <section id="KeyboardsPage">
    <div class="header" data-aos="fade-right" data-aos-duration="600">
      <h1>keyboard gallery</h1>
      <span>You can watch me build these keyboards live on <a href="https://twitch.tv/samuelmtthw">Twitch</a></span> <br>
      <span>Head over <router-link to='/order'>here</router-link> to order your custom keyboard!</span>
    </div>
    <hr>
    <div class="keyboard-container d-flex flex-row flex-wrap" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
      <KeyboardCard :from="'keyboards'" v-for="keyboard in keyboards" :key="keyboard.id" :keyboard="keyboard"></KeyboardCard>
    </div>
  </section>
</template>

<script>
import KeyboardCard from '@/components/KeyboardCard.vue'
import { alertError } from '../apis/swal'

export default {
  name: 'KeyboardsPage',
  data: function () {
    return {
      keyboards: []
    }
  },
  methods: {
    fetchGallery () {
      this.$store.dispatch('fetchGallery')
        .then((data) => {
          this.keyboards = data
        }).catch((err) => {
          alertError(err.message)
        })
    }
  },
  created () {
    this.fetchGallery()
  },
  components: {
    KeyboardCard
  }
}
</script>

<style>
  #KeyboardsPage a{
    color: black;
    font-weight: 600;
    display: inline-block;
    padding-bottom: 2px;
    border-bottom: 2px solid #fdf9f1;
  }
  #KeyboardsPage a:hover{
    border-bottom: 2px solid black;
  }
</style>
