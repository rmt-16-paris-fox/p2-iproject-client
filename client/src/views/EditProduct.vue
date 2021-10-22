<template>
  <div class="container" style="height: 86vh">
    <h1 class="mt-4">Edit Product</h1>
    <br />
    <div class="row justify-content-center">
      <form
        @submit.prevent="submitEditProduct"
        class="w-50 p-5"
        style="
          background-color: #3c415c;
          border-radius: 20px;
          height: 650px;
          box-shadow: 8px 19px 57px -8px rgba(0, 0, 0, 0.59);
        "
      >
        <div class="mb-3">
          <label class="form-label text-light">Name</label>
          <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Price</label>
          <input v-model="price" type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Image</label>
          <input @change="getImage($event)" type="file" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Stock</label>
          <input v-model="stock" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Product Category</label>
          <select
            v-model="categoryId"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected disabled>Open this select menu</option>
            <option
              v-for="listCategorie in listCategories"
              :key="listCategorie.id"
              :value="listCategorie.id"
            >
              {{ listCategorie.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Product Brand</label>
          <select
            v-model="brandId"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected disabled>Open this select menu</option>
            <option
              v-for="listBrand in listBrands"
              :key="listBrand.id"
              :value="listBrand.id"
            >
              {{ listBrand.name }}
            </option>
          </select>
        </div>
        <input type="hidden" />
        <button
          style="background-color: #b4a5a5"
          class="btn mt-3"
          type="submit"
        >
          Submit
        </button>
        <button
          @click="back"
          style="background-color: #b4a5a5"
          class="btn mt-3 mx-2"
          type="submit"
        >
          Back
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'EditProduct',
  data() {
    return {
      name: '',
      price: '',
      imageUrl: '',
      stock: '',
      categoryId: '',
      brandId: '',
      listCategories: [],
      listBrands: [],
    }
  },
  methods: {
    back() {
      this.$router.push('/products')
    },
    submitEditProduct() {
      const payload = {
        id: this.$store.state.products.id,
        name: this.name,
        price: this.price,
        imageUrl: this.imageUrl,
        stock: this.stock,
        categoryId: this.categoryId,
        brandId: this.brandId,
      }
      this.$store
        .dispatch('editProduct', payload)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success Edit Product',
            showConfirmButton: false,
            timer: 1500,
          })
          this.$router.push('/products')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.data.message,
          })
        })
    },
  },
  computed: {
    product() {
      return this.$store.state.products
    },
  },
  created() {
    this.$store
      .dispatch('getCategory')
      .then((data) => {
        this.listCategories = data
      })
      .catch((err) => {
        console.log(err)
      })

    this.$store
      .dispatch('getBrand')
      .then((data) => {
        this.listBrands = data
      })
      .catch((err) => {
        console.log(err)
      })
    this.name = this.$store.state.products.name
    this.price = this.$store.state.products.price
    this.imageUrl = this.$store.state.products.imageUrl
    this.stock = this.$store.state.products.stock
    this.categoryId = this.$store.state.products.categoryId
    this.brandId = this.$store.state.products.brandId
  },
}
</script>

<style></style>
