<template>
  <div class="container-fluid">
    <Navbar />
        <div class="row">
            <div class="col-8 justify-content-center">
                <iframe width="420" height="315" class="m-3"
                v-for="(video, idx) in getVideos" :key="idx"
                :src="'https://www.youtube.com/embed/' + video">
                </iframe>
            </div>
        </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'ClassPage',
  data () {
    return {
      src: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    getDataClass () {
      this.$store.dispatch('FetchVideo', this.$route.params.title)
        .then((data) => {
          const linkVideo = data.items.map(e => {
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
