<template>
  <div class="container-fluid">
    <Navbar />
        <div class="row">
          <div class="col-8 justify-content-center">
          <iframe width="400" height="280" class="m-3"
          v-for="(video, idx) in getVideos" :key="idx"
          :src="'https://www.youtube.com/embed/' + video">
          </iframe>
          </div>
        </div>
      <HFooter />
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'ClassPage',
  data () {
    return {
      src: ''
    }
  },
  components: {
    Navbar,
    HFooter
  },
  methods: {
    getDataClass () {
      this.$store.dispatch('FetchVideo', this.$route.params.title)
        .then((data) => {
          const linkVideo = data.map(e => {
            if (e.id.kind === 'youtube#video') {
              return e.id.videoId
            }
          })
          this.$store.commit('SET_VIDEOS', linkVideo)
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  },
  created () {
    this.getDataClass()
  },
  computed: {
    getVideos () {
      return this.$store.state.videos
    }
  }
}
</script>

<style>

</style>
