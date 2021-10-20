<template>
<div class="col mb-5">
  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img @click.prevent="toDetailPage"
      :src="DataClass.imageUrl"
      class="img-fluid"
    />
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.5);"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{DataClass.title}}</h5>
    <p class="card-text">
      Instructor: {{DataClass.instructor}}
    </p>
    <a @click.prevent="toDetailPage" class="btn btn-primary me-2">Detail</a>
    <a v-if="isLogin" @click.prevent="addClass" class="btn btn-primary">Add Class</a>
  </div>
</div>
 </div>
</template>

<script>
import { swalSuccess, swalError } from '../apis/swal'

export default {
  name: 'CardClass',
  props: ['DataClass'],
  methods: {
    toDetailPage () {
      this.$router.push(`/detail/${this.DataClass.id}`)
    },
    addClass () {
      this.$store.dispatch('AddClass', this.DataClass.id)
        .then(() => {
          this.$router.push('/myclass')
          swalSuccess('success add class')
        })
        .catch((err) => {
          swalError(err.response.data.message)
        })
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
