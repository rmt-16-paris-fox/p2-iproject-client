<template>
  <div class="col-2 mx-4">
    <div class="card mb-3">
      <img
        :src="product.imageUrl"
        class="card-img-top"
        alt=""
        height="180px"
        width="120px"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style="text-align: left">
            Price : {{ product.price }}
          </li>
          <li class="list-group-item" style="text-align: left">
            Stock : {{ product.stock }}
          </li>
          <li class="list-group-item" style="text-align: left">
            Category : {{ product.Category.name }}
          </li>
          <li class="list-group-item" style="text-align: left">
            Brand : {{ product.Brand.name }}
          </li>
        </ul>
        <div class="d-grid gap-2">
          <button
            class="btn text-light"
            type="button"
            style="background-color: #3c415c"
          >
            Buy Product
          </button>
          <button
            @click="editProduct(product.id)"
            class="btn text-light"
            type="button"
            style="background-color: #3c415c"
          >
            Edit Product
          </button>
          <button
            @click="deleteProduct(product.id)"
            class="btn btn-danger text-light"
            type="button"
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    // editProduct(productId) {
    //   // this.$emit('editProduct', productId)
    //   this.$router.push('/editProducts')
    // },
    deleteProduct(id) {
      this.$store
        .dispatch('deleteProduct', id)
        .then(() => {
          // this.$router.push('/products')
          this.$emit('deleteSuccess')
        })
        .catch((err) => {
          console.log(err.data)
        })
    },
  },
}
</script>

<style>
body {
  background-color: #b4a5a5;
}
</style>
