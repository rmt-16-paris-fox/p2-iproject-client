<template>
  <div class="container-fluid d-flex mt-5 pt-5" style="height: 100vh">
    <div class="row">
      <div class="col-2" style="background-color: red">
        <p>test</p>
      </div>
      <div class="col-10 d-flex flex-md-wrap">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'Product',
  components: {
    ProductCard,
  },
  created() {
    this.$store.dispatch('fetchProduct')
  },
}
</script>

<style></style>
