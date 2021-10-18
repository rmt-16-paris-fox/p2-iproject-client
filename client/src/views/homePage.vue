<template>
<div>

  <h1>Home Page</h1>

</div>

</template>

<script>

export default {
  name: 'homePage',
  data () {
    return {
      categoryId: '',
      title: ''
    }
  },
  methods: {

  },
  components: {
  },
  created () {
    // manggil fungsi get data home dari store
    // manggil data dari state
    // baru tampilin data

  },
  computed: {

  }
}
</script>

<style>
.pagin {
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
}
</style>
