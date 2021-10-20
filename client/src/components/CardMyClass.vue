<template>
<div class="col mb-5">
  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img @click.prevent="toDetailPage"
      :src="DataClass.Class.imageUrl"
      class="img-fluid"
    />
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.5);"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{DataClass.Class.title}}</h5>
    <p class="card-text">
      Instructor: {{DataClass.Class.instructor}}
    </p>
    <a @click.prevent="toDetailPage" class="btn btn-primary">Start</a>
  </div>
</div>
 </div>
</template>

<script>
export default {
  name: 'CardMyClass',
  props: ['DataClass'],
  methods: {
    toDetailPage () {
      this.$router.push(`/detail/${this.DataClass.Class.id}`)
    }
  }
}
</script>

<style>

</style>
