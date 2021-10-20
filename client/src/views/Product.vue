<template>
  <div class="container-fluid d-flex mt-5" style="height: 100vh">
    <div class="row">
      <div class="col-12 d-flex flex-md-wrap">
        <ProductCard
          @deleteSuccess="deleteSuccess"
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></ProductCard>
      </div>
      <HFooter></HFooter>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'Product',
  data() {
    return {
      products: [],
    }
  },
  methods: {
    deleteSuccess() {
      this.$store
        .dispatch('fetchProduct')
        .then((data) => {
          this.products = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  components: {
    ProductCard,
    HFooter,
  },
  created() {
    this.$store
      .dispatch('fetchProduct')
      .then((data) => {
        this.products = data
      })
      .catch((err) => {
        console.log(err)
      })

    if (!localStorage.getItem('access_token')) {
      this.$store.commit('SET_IS_LOGIN', false)
    } else {
      this.$store.commit('SET_IS_LOGIN', false)
    }
  },
}
</script>

<style></style>
